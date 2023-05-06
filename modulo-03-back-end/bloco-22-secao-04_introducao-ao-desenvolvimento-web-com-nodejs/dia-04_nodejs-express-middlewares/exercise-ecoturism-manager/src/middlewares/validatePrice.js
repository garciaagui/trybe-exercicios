module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;
  const { price } = req.body;

  if (price === undefined) {
    res.status(BAD_REQUEST_CODE).json(
      { message: 'O campo price é obrigatório' },
    );
  } else if (Number.isNaN(price) || Number(price) < 0) {
    res.status(BAD_REQUEST_CODE).json(
      { message: 'O campo price deve ser um número maior ou igual a zero' },
    );
  } else {
    next();
  }
};