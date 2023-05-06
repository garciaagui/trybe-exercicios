module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { phone } = req.body;
  const PHONE_REGEX = /\(\d{2,}\) \d{4,}-\d{4}/g;

  if (!phone || !phone.length) {
    res.status(UNAUTHORIZED_CODE).json({ message: 'O campo phone é obrigatório' });
  } else if (!phone.match(PHONE_REGEX)) {
    res.status(UNAUTHORIZED_CODE).json({
      message: 'O campo phone deve ser composto por números e deve ter o formato \'(XX) XXXX-XXX\'',
    });
  } else {
    next();
  }
};