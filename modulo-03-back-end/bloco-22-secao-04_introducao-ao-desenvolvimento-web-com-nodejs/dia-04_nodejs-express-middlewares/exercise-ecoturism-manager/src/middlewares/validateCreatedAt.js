module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;
  const DATE_REGEX = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  const { createdAt } = req.body.description;

  if (!createdAt.match(DATE_REGEX)) {
    res.status(BAD_REQUEST_CODE).json({
      message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'',
    });
  } else {
    next();
  }
};