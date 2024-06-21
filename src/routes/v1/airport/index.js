const express = require('express');
const router = express.Router();
const { createAirport, getAllAirport, getAirportById, updateAirport, deleteAirport} = require('../../../controllers/airport-controller');

router.get('/', getAllAirport);
router.get('/:id', getAirportById);
router.post('/', createAirport);
router.put('/:id', updateAirport);
router.delete('/:id', deleteAirport);

module.exports = router;
