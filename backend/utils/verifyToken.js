import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log('Token from cookie:', token);  // Debug token presence

  if (!token) {
    return res.status(401).json({ success: false, message: 'You are not authenticated!' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log('JWT verify error:', err);  // Debug invalid token errors
      return res.status(401).json({ success: false, message: 'Token is invalid!' });
    }
    console.log('Decoded user from token:', user);  // Debug decoded token payload
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log('User ID from token:', req.user.id);
    console.log('User role from token:', req.user.role);
    console.log('ID in request params:', req.params.id);

    if (req.user.id === req.params.id || req.user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ success: false, message: 'You are not authorized!' });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log('User role from token (admin check):', req.user.role);

    if (req.user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ success: false, message: 'You are not authorized!' });
    }
  });
};

export default verifyToken;
