module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { email } = req.body;
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

  if (!email || !email.length) {
    res.status(UNAUTHORIZED_CODE).json({
      message: 'O campo email é obrigatório',
    });
  } else if (!email.match(EMAIL_REGEX)) {
    res.status(UNAUTHORIZED_CODE).json({
      message: 'O campo email deve ter o formato correto de endereços de email',
    });
  } else {
    next();
  }
};