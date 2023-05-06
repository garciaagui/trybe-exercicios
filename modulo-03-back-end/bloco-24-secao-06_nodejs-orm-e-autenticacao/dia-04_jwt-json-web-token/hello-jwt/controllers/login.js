require('dotenv/config');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { validateUserInfo } = require('../validations/validationsInputValues');
const { checkUser, signupUser } = require('../utils/handleJSON');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const error = await validateUserInfo(username, password);
    if (error.type) return res.status(422).json(error);

    const user = await checkUser(username);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'User does not exist or password is invalid' });
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const payload = {
      username,
      admin: user.admin,
    }

    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
