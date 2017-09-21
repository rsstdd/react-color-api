const express = require('express');
const { getColors, getColorById, getColorByHue } = require('./colors/read-colors');

const router = express.Router();

router.get('/', getColors);
router.get('/:id', getColorById);
router.get('/hue', getColorByHue);

module.exports = router;