import Stripe from 'stripe';

// Initialize Stripe with your secret key from the .env file
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Creates a Stripe Checkout Session for tour bookings.
 */
export const createCheckoutSession = async (req, res) => {
    const { tourName, price, guestSize } = req.body;
    const totalAmount = price * guestSize;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: `${tourName} (${guestSize} guest/s)`,
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            success_url: `${process.env.FRONTEND_URL}/thank-you`,
            cancel_url: `${process.env.FRONTEND_URL}/tours`,
        });

        res.status(200).json({ success: true, url: session.url });

    } catch (err) {
        console.error("Stripe Error:", err.message);
        res.status(500).json({ success: false, message: 'Failed to create Stripe session' });
    }
};

/**
 * Handles incoming webhook events from Stripe for tour bookings.
 */
export const handleStripeWebhook = async (req, res) => {
    // This existing function also remains completely unchanged.
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        console.log('✅ Payment was successful for session:', session.id);
    }

    res.send({ received: true });
};


export const createTripPayment = async (req, res) => {
    try {
        // --- CHANGE 1: We now also get the user's email from the request body ---
        const { totalAmount, flight, hotel, userEmail } = req.body;

        if (!totalAmount || !flight || !hotel || !userEmail) {
            return res.status(400).json({ success: false, message: "Missing trip or user details." });
        }

        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            // --- CHANGE 2: Pre-fill the customer's email on the Stripe page ---
            customer_email: userEmail,
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: `Trip: ${flight.airline} & ${hotel.name}`,
                            description: `Flight from ${flight.from} to ${flight.to} and hotel stay.`
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            success_url: `${process.env.FRONTEND_URL}/trip-planner/confirmation`,
            cancel_url: `${process.env.FRONTEND_URL}/trip-planner/checkout`,
        });

        res.status(200).json({ success: true, url: session.url });

    } catch (error) {
        console.error("❌ Tripix Checkout Session Error:", error.message);
        res.status(500).json({ success: false, message: "Failed to create Stripe session" });
    }
};