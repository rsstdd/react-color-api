const express = require('express');
const { getColors, getColorById } = require('./colors/read-colors');

const router = express.Router();

router.get('/', getColors);

module.exports = router;