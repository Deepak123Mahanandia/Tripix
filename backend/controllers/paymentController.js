import Stripe from 'stripe';

// Initialize Stripe with your secret key from the .env file
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Creates a Stripe Checkout Session and sends the session URL to the frontend.
 */
export const createCheckoutSession = async (req, res) => {
    // In a real application, you should fetch the tour from your database to get the real price
    // instead of trusting the price from the frontend.
    const { tourName, price, guestSize } = req.body;
    const totalAmount = price * guestSize; // You can add your service fee here as well

    try {
        // Create a Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'inr', // Or your preferred currency
                        product_data: {
                            name: `${tourName} (${guestSize} guest/s)`,
                        },
                        // Amount must be in the smallest currency unit (e.g., paise for INR)
                        unit_amount: totalAmount * 100, 
                    },
                    quantity: 1,
                },
            ],
            // URL to redirect to after a successful payment
            success_url: `${process.env.FRONTEND_URL}/thank-you`,
            // URL to redirect to if the user cancels
            cancel_url: `${process.env.FRONTEND_URL}/tours`,
        });

        // Send the session URL back to the frontend
        res.status(200).json({ success: true, url: session.url });

    } catch (err) {
        console.error("Stripe Error:", err.message);
        res.status(500).json({ success: false, message: 'Failed to create Stripe session' });
    }
};

/**
 * Handles incoming webhook events from Stripe to confirm payments.
 */
export const handleStripeWebhook = async (req, res) => {
  // Get the signature from the headers
  const sig = req.headers['stripe-signature'];
  // Get your Webhook Signing Secret from your .env file
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Verify the event is from Stripe using the raw body and signature
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the 'checkout.session.completed' event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // FULFILL THE PURCHASE
    // This is where you should save the booking to your database, send a confirmation email, etc.
    // The 'session' object contains useful information like session.id, session.amount_total, session.customer_details
    console.log('✅ Payment was successful for session:', session.id);
    // Example: createBookingInDatabase(session);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send({ received: true });
};