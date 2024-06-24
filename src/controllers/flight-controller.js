const { FlightService } = require("../services");

// Post -> /flights -> req.body
const createFlight = async (req, res) => {
  try {
    
    const { flightName, airplaneId, arrivalAirportId, departureAirportId, arrivalTime, departureTime, price } = req.body;
    let flightObj = { 
      flightName, 
      airplaneId, 
      arrivalAirportId, 
      departureAirportId, 
      arrivalTime, 
      departureTime, 
      price 
    };

    const flight = await FlightService.createFlight(flightObj);
    res.status(200).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to create flight",
      error: error,
    });
  }
};

// Get -> /flights -> req.query
const getAllFlights = async (req, res) => {
  try {
    const flights = await FlightService.getAllFlight(req.query);
    if (flights.length === 0) {
      return res.status(404).json({
        data: null,
        success: false,
        message: "No flights found",
      });
    }
    res.status(200).json({
      data: flights,
      success: true,
      message: "All flights fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to fetch flights",
      error: error,
    });
  }
};

// Get -> /flights/:flightId -> req.params
const getFlightById = async (req, res) => {
  try {
    const flight = await FlightService.getFlightById(req.params.flightId);
    if (!flight) {
      return res.status(404).json({
        data: null,
        success: false,
        message: "No flights found.",
      });
    }
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Flight fetched successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to fetch flight",
      error: error,
    });
  }
};

// Patch -> /flights/:flightId -> req.params, req.body
const updateFlight = async (req, res) => {
  try {
    const flightData = await FlightService.getFlightById(req.params.flightId);
    const { arrivalAirportId, departureAirportId, arrivalTime, departureTime, price } = req.body;
    const updateFlightObj ={
      flightName:  flightData.flightName,
      airplaneId: flightData.airplaneId,
      arrivalAirportId: arrivalAirportId || flightData.arrivalAirportId,
      departureAirportId: departureAirportId || flightData.departureAirportId,
      arrivalTime: arrivalTime || flightData.arrivalTime,
      departureTime: departureTime || flightData.departureTime,
      price: price || flightData.price,
      totalSetas: flightData.totalSetas,
      boardingGate: flightData.boardingGate
    }
    const flight = await FlightService.updateFlight(req.params.flightId, updateFlightObj);
    if (!flight) {
      return res.status(404).json({
        data: null,
        success: false,
        message: "Flight not found.",
      });
    }
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Flight updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to update flight",
      error: error,
    });
  }
};

// Delete -> /flights/:flightId -> req.params
const deleteFlight = async (req, res) => {
  try {
    const flight = await FlightService.deleteFlight(req.params.flightId);
    if (!flight) {
      return res.status(404).json({
        data: null,
        success: false,
        message: "Flight not found.",
      });
    }
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Flight deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to delete flight",
      error: error,
    });
  }
};

module.exports = {
  createFlight,
  getAllFlights,
  getFlightById,
    updateFlight,
    deleteFlight,
};
