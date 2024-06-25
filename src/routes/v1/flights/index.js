const express = require("express");
const router = express.Router();
const {
  createFlight,
  getAllFlights,
  getFlightById,
  updateFlight,
  deleteFlight,
} = require("../../../controllers/flight-controller");
const { FlightMiddleware } = require("../../../middlewares/index");

router.post("/", FlightMiddleware.validateCreateFlight, createFlight);
router.get("/", getAllFlights);
router.get("/:flightId", getFlightById);
router.patch("/:flightId", FlightMiddleware.validateUpdateFlight, updateFlight);
router.delete("/:flightId", deleteFlight);

module.exports = router;
