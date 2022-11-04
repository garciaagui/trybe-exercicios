module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { password } = req.body;

  if (!password || !password.length) {
    res.status(UNAUTHORIZED_CODE).json({ message: 'O campo password é obrigatório' });
  } else {
    next();
  }
};