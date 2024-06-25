const { AirportService } = require("../services/index");
const {
  SuccessCodes,
  ClientErrorCodes,
  ServerErrorCodes,
} = require("../utils/error-codes");

// Post -> /airports -> req.body -> {name : "airport name", cityId : cityId}
const createAirport = async (req, res) => {
  try {
    const { name, address, cityId } = req.body;
    const airportObj = {
      name,
      address,
      cityId,
    };
    const airport = await AirportService.create(airportObj);
    return res.status(SuccessCodes.CREATED).json({
      data: airport,
      success: true,
      message: "Airport created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to create airport",
      error: error,
    });
  }
};

// Get -> /airports
const getAllAirport = async (req, res) => {
  try {
    const airports = await AirportService.getAll(req.query);
    if (airports.length === 0) {
      return res.status(SuccessCodes.NO_CONTENT).json({
        data: null,
        success: true,
        message: "No airports found",
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: airports,
      success: true,
      message: "All airports fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to fetch airports",
      error: error,
    });
  }
};

// Get -> /airports/:airportId
const getAirportById = async (req, res) => {
  try {
    const airport = await AirportService.getById(req.params.airportId);
    if (!airport) {
      return res.status(ClientErrorCodes.NOT_FOUND).json({
        data: null,
        success: false,
        message: "Airport not found",
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "Airport fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to fetch airport",
      error: error,
    });
  }
};

// Put -> /airports/:airportId -> req.body -> {name : "airport name" , cityId : cityId}
const updateAirport = async (req, res) => {
  try {
    const airportData = await AirportService.getById(req.params.airportId);
    if (!airportData) {
      return res.status(ClientErrorCodes.NOT_FOUND).json({
        data: null,
        success: false,
        message: "Airport not found",
      });
    }
    const { name, address, cityId } = req.body;
    const airportObj = {
      name: name || airportData.name,
      address: address || airportData.address,
      cityId: cityId || airportData.cityId,
    };
    const airport = await AirportService.updateById(
      req.params.airportId,
      airportObj
    );
    if (!airport) {
      return res.status(SuccessCodes.NO_CONTENT).json({
        data: null,
        success: true,
        message: "Airport not found",
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "Airport updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to update airport",
      error: error,
    });
  }
};

// Delete -> /airports/:airportId
const deleteAirport = async (req, res) => {
  try {
    const airport = await AirportService.deleteById(req.params.airportId);
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "Airport deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to delete airport",
      error: error,
    });
  }
};

module.exports = {
  createAirport,
  getAllAirport,
  getAirportById,
  updateAirport,
  deleteAirport,
};
