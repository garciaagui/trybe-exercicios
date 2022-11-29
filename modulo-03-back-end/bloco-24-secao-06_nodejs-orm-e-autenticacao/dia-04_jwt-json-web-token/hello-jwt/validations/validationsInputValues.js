const schemas = require('./schemas');

const validateLogin = async (username, password) => {
  const { error } = schemas.loginSchema.validate({ username, password });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
}

module.exports = {
  validateLogin,
};