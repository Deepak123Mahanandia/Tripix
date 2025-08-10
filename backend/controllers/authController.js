import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register a new user
export const register = async (req, res) => {
    try {

        // hash the password
        const salt = bcrypt.genSalt(10);
        const hash = bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        });
        await newUser.save();
        res.status(200).json({ success: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'failed to register user' });
    }
};

// user login
export const login = async (req, res) => {
    const user = await User.email


  try {
    const user = await User.findOne({email});

    // if user not found
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // if user is exists, check the password
    const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

    // if password is invalid
    if (!checkCorrectPassword) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    const { password, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });


    // set token in the browser cookie and send response to the client
    res.cookie('access_token', token, {
      httpOnly: true,
      expires: token.expiresIn
      
    }).status(200).json({ token, data: { ...rest} });

  } catch (err) {
    res.status(500).json({ success: false, message: 'failed to login' });
  }
};
