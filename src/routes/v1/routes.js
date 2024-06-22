const express = require('express');
const router = express.Router();
const { cityApiRoutes, airportApiRoutes, airplaneApiRoutes } = require('./index');

router.use('/city', cityApiRoutes);
router.use('/airport', airportApiRoutes);
router.use('/airplane', airplaneApiRoutes);


module.exports = router;