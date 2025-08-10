import User from '../models/Tour.js'; // ✅ Corrected from 'user' to 'User'

// Create a new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: 'Successfully created',
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create. Try again later.'
    });
  }
};

// Update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updatedUser
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update. Try again later.'
    });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete. Try again later.'
    });
  }
};

// Get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: 'Successfully fetched',
      data: user
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Failed to fetch. Try again later.'
    });
  }
};

// Get all users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      count: users.length,
      message: 'Successfully fetched all users',
      data: users
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Not found'
    });
  }
};
