module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;
  const { rating } = req.body.description;

  if (!Number.isInteger(rating) || Number(rating) < 1 || Number(rating) > 5) {
    res.status(BAD_REQUEST_CODE).json({
      message: 'O campo rating deve ser um número inteiro entre 1 e 5',
    });
  } else {
    next();
  }
};