const express = require('express');
const router = express.Router();

const { createAirplane, getAirplaneById, getAllAirplanes, updateAirplaneById, deleteAirplaneById } = require('../../../controllers/airplane-controller');

router.post('/', createAirplane);
router.get('/:airplaneId', getAirplaneById);
router.get('/', getAllAirplanes);
router.put('/:airplaneId', updateAirplaneById);
router.delete('/:airplaneId', deleteAirplaneById);

module.exports = router;