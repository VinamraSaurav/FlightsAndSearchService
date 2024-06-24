const express = require('express');
const router = express.Router();
const { createFlight, getAllFlights, getFlightById, updateFlight, deleteFlight } = require('../../../controllers/flight-controller');

router.post('/', createFlight);
router.get('/', getAllFlights);
router.get('/:flightId',getFlightById);
router.put('/:flightId', updateFlight);
router.delete('/:flightId', deleteFlight);

module.exports = router;