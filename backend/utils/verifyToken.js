// utils/verifyToken.js

import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  // Get token from the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'You are not authenticated. No token provided.' });
  }

  // Extract the token from the "Bearer <token>" string
  const token = authHeader.split(' ')[1];

  // --- DEBUG LINE ADDED ---
  console.log('[Verify Token] Secret key used for verification:', process.env.JWT_SECRET_KEY);

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Invalid Token. Please log in again.' });
    }

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ success: false, message: 'You are not authorized!' });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ success: false, message: 'You are not authorized!' });
    }
  });
};