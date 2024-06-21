const express = require('express');
const router = express.Router();
const cityApiRoutes = require('./city/index');
const airportApiRoutes = require('./airport/index');

router.use('/city', cityApiRoutes);
router.use('/airport', airportApiRoutes);

module.exports = router;