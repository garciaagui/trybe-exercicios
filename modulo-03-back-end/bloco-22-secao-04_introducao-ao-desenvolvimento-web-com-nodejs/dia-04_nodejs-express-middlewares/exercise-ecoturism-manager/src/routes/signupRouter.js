const express = require('express');
const validateUserEmail = require('../middlewares/validateUserEmail');
const validateUserFirstName = require('../middlewares/validateUserFirstName');
const validateUserPassword = require('../middlewares/validateUserPassword');
const validateUserPhone = require('../middlewares/validateUserPhone');
const generateToken = require('../utils/generateToken');

const router = express.Router();

const OK = 200;

router.post('/',
  validateUserEmail,
  validateUserFirstName,
  validateUserPassword,
  validateUserPhone, (_req, res) => {
    token = generateToken();
    res.status(OK).json({
      message: 'Usuário cadastrado com sucesso!',
      token
    });
  });

module.exports = router;
