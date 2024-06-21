const express = require('express');
const {createCity, getAllCity, getCityById, updateCity, deleteCity} = require('../../controllers/city-controller');
const router = express.Router();

router.get('/city', getAllCity);
router.get('/city/:id', getCityById);
router.post('/city', createCity);
router.put('/city/:id', updateCity);
router.delete('/city/:id', deleteCity);

module.exports = router;