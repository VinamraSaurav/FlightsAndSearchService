const express = require('express');
const router = express.Router();
const { createFlight } = require('../../../controllers/flight-controller');

router.post('/', createFlight);

module.exports = router;