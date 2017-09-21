const express = require('express');
const colorRoutes = require('./color-routes');

const router = express.Router();

router.use('/colors', colorRoutes);

module.exports = router;

