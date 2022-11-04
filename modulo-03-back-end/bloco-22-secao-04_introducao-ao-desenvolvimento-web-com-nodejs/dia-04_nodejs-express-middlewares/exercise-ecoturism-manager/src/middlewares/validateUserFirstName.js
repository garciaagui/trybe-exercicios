module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { firstName } = req.body;

  if (!firstName || !firstName.length) {
    res.status(UNAUTHORIZED_CODE).json({ message: 'O campo firstName é obrigatório' });
  } else {
    next();
  }
};