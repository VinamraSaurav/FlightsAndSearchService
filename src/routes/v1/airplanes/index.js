const express = require("express");
const router = express.Router();

const {
  createAirplane,
  getAirplaneById,
  getAllAirplanes,
  updateAirplaneById,
  deleteAirplaneById,
} = require("../../../controllers/airplane-controller");
const { AirplaneMiddleware } = require("../../../middlewares/index");

router.post("/", AirplaneMiddleware.validateCreateAirplane, createAirplane);
router.get("/:airplaneId", getAirplaneById);
router.get("/", getAllAirplanes);
router.patch(
  "/:airplaneId",
  AirplaneMiddleware.validateUpdateAirplane,
  updateAirplaneById
);
router.delete("/:airplaneId", deleteAirplaneById);

module.exports = router;
