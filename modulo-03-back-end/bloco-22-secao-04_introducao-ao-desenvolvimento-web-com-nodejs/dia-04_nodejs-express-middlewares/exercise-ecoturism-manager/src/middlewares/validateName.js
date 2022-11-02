module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;
  const { name } = req.body;

  if (!name || !name.length) {
    res.status(BAD_REQUEST_CODE).json({ message: 'O campo name é obrigatório' });
  } else if (name <= 4) {
    res.status(BAD_REQUEST_CODE).json({ message: 'O campo name deve ter mais de 4 caracteres' });
  } else {
    next();
  }
};