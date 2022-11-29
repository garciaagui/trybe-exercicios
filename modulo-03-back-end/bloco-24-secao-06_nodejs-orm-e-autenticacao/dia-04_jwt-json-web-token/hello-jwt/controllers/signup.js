require('dotenv/config');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { validateUserInfo } = require('../validations/validationsInputValues');
const generateAdminStatus = require('../utils/generateAdminStatus');
const { checkUser, signupUser } = require('../utils/handleJSON');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const error = await validateUserInfo(username, password);
    if (error.type) return res.status(422).json(error);

    const doesUserExist = await checkUser(username);
    if (doesUserExist) return res.status(409).json({ error: { "message": "user already exists" } });

    const adminStatus = generateAdminStatus();

    await signupUser({ username, password, admin: adminStatus })

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const payload = {
      username,
      admin: adminStatus,
    }

    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
