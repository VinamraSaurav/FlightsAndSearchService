const express = require('express');
const router = express.Router();
const { createAirport, getAllAirport, getAirportById, updateAirport, deleteAirport} = require('../../../controllers/airport-controller');

router.get('/', getAllAirport);
router.get('/:airportId', getAirportById);
router.post('/', createAirport);
router.put('/:airportId', updateAirport);
router.delete('/:airportId', deleteAirport);

module.exports = router;
