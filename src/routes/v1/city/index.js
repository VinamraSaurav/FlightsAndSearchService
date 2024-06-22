const express = require('express');
const {getAirportByCityId,createCityBulk, createCity, getAllCity, getCityById, updateCity, deleteCity} = require('../../../controllers/city-controller');
const router = express.Router();

router.get('/getAirports', getAirportByCityId);
router.post('/bulk', createCityBulk);
router.get('/', getAllCity);
router.get('/:id', getCityById);
router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

module.exports = router;