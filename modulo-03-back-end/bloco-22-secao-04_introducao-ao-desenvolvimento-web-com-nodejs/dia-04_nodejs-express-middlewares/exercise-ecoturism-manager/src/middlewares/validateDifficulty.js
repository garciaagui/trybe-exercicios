module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;

  const { difficulty } = req.body.description;

  const classifications = ['Fácil', 'Médio', 'Difícil'];

  if (!classifications.some((e) => e === difficulty)) {
    res.status(BAD_REQUEST_CODE).json({
      message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'',
    });
  } else {
    next();
  }
};