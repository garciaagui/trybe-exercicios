module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(UNAUTHORIZED_CODE).json({ message: 'Token inválido!' });
  }
  next();
};