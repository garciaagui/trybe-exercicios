const validateKeys = (descriptionValue, res, value) => {
  const BAD_REQUEST_CODE = 400;

  if (!descriptionValue) {
    return res.status(BAD_REQUEST_CODE).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;

  return validateKeys(description, res, 'description')
    || validateKeys(description.createdAt, res, 'createdAt')
    || validateKeys(description.rating, res, 'rating')
    || validateKeys(description.difficulty, res, 'difficulty')
    || next();
};