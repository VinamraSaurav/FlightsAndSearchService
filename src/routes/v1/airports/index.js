const express = require("express");
const router = express.Router();
const {
  createAirport,
  getAllAirport,
  getAirportById,
  updateAirport,
  deleteAirport,
} = require("../../../controllers/airport-controller");
const { AirportMiddleware } = require("../../../middlewares/index");

router.get("/", getAllAirport);
router.get("/:airportId", getAirportById);
router.post("/", AirportMiddleware.validateCreateAirport, createAirport);
router.patch(
  "/:airportId",
  AirportMiddleware.validateUpdateAirport,
  updateAirport
);
router.delete("/:airportId", deleteAirport);

module.exports = router;
