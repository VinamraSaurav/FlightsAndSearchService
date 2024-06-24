const express = require('express');
const {getAirportByCityId,createCityBulk, createCity, getAllCity, getCityById, updateCity, deleteCity} = require('../../../controllers/city-controller');
const router = express.Router();
const {CityMiddleware} = require('../../../middlewares/index');

router.get('/getAirports', getAirportByCityId);
router.post('/bulk', CityMiddleware.validateBulkCreateCity, createCityBulk);
router.get('/', getAllCity);
router.get('/:id', getCityById);
router.post('/', CityMiddleware.validateCreateCity, createCity);
router.patch('/:id', CityMiddleware.validateUpdateCity, updateCity);
router.delete('/:id', deleteCity);

module.exports = router;