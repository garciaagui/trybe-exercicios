const express = require('express');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficulty = require('../middlewares/validateDifficulty');

const router = express.Router();

const CREATED_CODE = 201;

router.post('/',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty, (_req, res) => {
    res.status(CREATED_CODE).json({ message: 'Atividade cadastrada com sucesso!' });
  });

module.exports = router;
