const { AirplaneService } = require("../services/index");
const {
  SuccessCodes,
  ClientErrorCodes,
  ServerErrorCodes,
} = require("../utils/error-codes");

// Post -> /airplanes -> req.body -> {model, capacity}
const createAirplane = async (req, res) => {
  try {
    const { model, capacity } = req.body;
    const airplaneObj = { model, capacity };
    const airplane = await AirplaneService.create(airplaneObj);
    return res.status(SuccessCodes.CREATED).json({
      data: airplane,
      success: true,
      message: "Airplane created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      data: null,
      success: false,
      message: "Error in creating airplane",
      error: error,
    });
  }
};

// Get -> /airplanes/:airplaneId -> req.params -> {airplaneId}
const getAirplaneById = async (req, res) => {
  try {
    const airplane = await AirplaneService.getById(req.params.airplaneId);
    if (!airplane) {
      return res.status(ClientErrorCodes.NOT_FOUND).json({
        data: null,
        success: false,
        message: "No airplane found",
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: airplane,
      success: true,
      message: "Airplane fetched successfully",
    });
  } catch (error) {
    return res.status(400).json({
      data: null,
      success: false,
      message: "Error in fetching airplane",
      error: error,
    });
  }
};

// Get -> /airplanes?model -> req.query -> {model}
const getAllAirplanes = async (req, res) => {
  try {
    const airplanes = await AirplaneService.getAll(req.query);
    if (airplanes.length === 0) {
      return res.status(SuccessCodes.NO_CONTENT).json({
        data: null,
        success: true,
        message: "No airplanes found",
      });
    }
    return res.status(200).json({
      data: airplanes,
      success: true,
      message: "All airplanes fetched successfully",
    });
  } catch (error) {
    return res.status(400).json({
      data: null,
      success: false,
      message: "Error in fetching airplanes",
      error: error,
    });
  }
};

// Put -> /airplanes/:airplaneId -> req.params -> {airplaneId}, req.body -> {model, capacity}
const updateAirplaneById = async (req, res) => {
  try {
    const airplaneData = await AirplaneService.getById(req.params.airplaneId);
    if (!airplaneData) {
      return res.status(ClientErrorCodes.NOT_FOUND).json({
        data: null,
        success: false,
        message: "Airplane not found",
      });
    }
    const { model, capacity } = req.body;
    const airplaneObj = {
      model: model || airplaneData.model,
      capacity: capacity || airplaneData.capacity,
    };
    const airplane = await AirplaneService.updateById(
      req.params.airplaneId,
      airplaneObj
    );
    if (!airplane) {
      return res.status(SuccessCodes.NO_CONTENT).json({
        data: null,
        success: true,
        message: "Airplane not found",
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: airplane,
      success: true,
      message: "Airplane updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      data: null,
      success: false,
      message: "Error in updating airplane",
      error: error,
    });
  }
};

// Delete -> /airplanes/:airplaneId -> req.params -> {airplaneId}
const deleteAirplaneById = async (req, res) => {
  try {
    const airplane = await AirplaneService.deleteById(req.params.airplaneId);
    return res.status(SuccessCodes.OK).json({
      data: airplane,
      success: true,
      message: "Airplane deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      data: null,
      success: false,
      message: "Error in deleting airplane",
      error: error,
    });
  }
};

module.exports = {
  createAirplane,
  getAirplaneById,
  getAllAirplanes,
  updateAirplaneById,
  deleteAirplaneById,
};
