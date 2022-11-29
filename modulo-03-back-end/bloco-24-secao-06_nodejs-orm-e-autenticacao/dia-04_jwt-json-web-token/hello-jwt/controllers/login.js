require('dotenv/config');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { validateLogin } = require('../validations/validationsInputValues');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const error = await validateLogin(username, password);
    if (error.type) return res.status(422).json(error);;

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const payload = {
      username,
      admin: username === 'admin' && password === 's3nh4S3gur4???' ? true : false,
    }

    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
