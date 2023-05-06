require('dotenv/config');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};