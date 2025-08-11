import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// REGISTER
export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash
    });

    await newUser.save();
    res.status(200).json({ success: true, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// =================== CORRECTED LOGIN FUNCTION ===================
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Create the token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );

    // Separate password from the rest of the user data for security
    const { password, role, ...rest } = user._doc;

    // Send the token AND user data back to the frontend
    res
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        token, // The generated token
        data: { ...rest, role }, // User data without the password
      });

  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};