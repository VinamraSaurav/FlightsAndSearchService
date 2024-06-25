const express = require("express");
const router = express.Router();
const {
  cityApiRoutes,
  airportApiRoutes,
  airplaneApiRoutes,
  flightApiRoutes,
} = require("./index");

router.use("/cities", cityApiRoutes);
router.use("/airports", airportApiRoutes);
router.use("/airplanes", airplaneApiRoutes);
router.use("/flights", flightApiRoutes);

module.exports = router;
