const { CityService } = require("../services/index");
const {
  SuccessCodes,
  ClientErrorCodes,
  ServerErrorCodes,
} = require("../utils/error-codes");

//Get -> /cities/getAirports?cityId=1 -> req.query -> {cityId : 1}
const getAirportByCityId = async (req, res) => {
  try {
    const city = await CityService.getAirportByCityId(req.query);
    if (!city) {
      return res.status(ClientErrorCodes.NOT_FOUND).json({
        data: city,
        success: false,
        message: "City not found",
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: city,
      success: true,
      message: "Airport fetched successfully by city id",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to get airport by city id",
      error: error,
    });
  }
};

// Post -> /cities/bulk -> req.body -> [{name : "city name"}]
const createCityBulk = async (req, res) => {
  try {
    const cities = req.body;
    const citiesArray = [];
    cities.forEach((city) => {
      citiesArray.push({ name: city.name });
    });

    const citiesResponse = await CityService.createCityBulk(citiesArray);
    if (!citiesResponse || citiesResponse.length === 0) {
      return res.status(SuccessCodes.NO_CONTENT).json({
        data: citiesResponse,
        success: true,
        message: "No cities created",
      });
    }
    return res.status(SuccessCodes.CREATED).json({
      data: citiesResponse,
      success: true,
      message: "Cities created successfully",
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to create cities",
      error: error.message,
    });
  }
};

// Post -> /cities -> req.body -> {name : "city name"}
const createCity = async (req, res) => {
  try {
    const { name } = req.body;
    const cityObj = { name };
    const city = await CityService.create(cityObj);
    return res.status(SuccessCodes.CREATED).json({
      data: city,
      success: true,
      message: "City created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to create city",
      error: error,
    });
  }
};

// Get -> /cities
const getAllCity = async (req, res) => {
  try {
    const cities = await CityService.getAll(req.query);
    if (cities.length === 0) {
      return res.status(SuccessCodes.NO_CONTENT).json({
        data: cities,
        success: true,
        message: "No cities found",
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: cities,
      success: true,
      message: "All cities fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to get all city",
      error: error,
    });
  }
};

// Get -> /cities/:id -> req.params -> {id : 1}
const getCityById = async (req, res) => {
  try {
    const city = await CityService.getById(req.params.id);
    if (!city) {
      return res.status(ClientErrorCodes.NOT_FOUND).json({
        data: city,
        success: false,
        message: "City not found",
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: city,
      success: true,
      message: "City fetched successfully by id",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to get city by id",
      error: error,
    });
  }
};

// Put -> /cities/:id -> req.params -> {id : 1} -> req.body -> {name : "city name"}
const updateCity = async (req, res) => {
  try {
    const cityData = await CityService.getById(req.params.id);
    if (!cityData) {
      return res.status(ClientErrorCodes.NOT_FOUND).json({
        data: null,
        success: false,
        message: "City not found",
      });
    }
    const { name } = req.body;
    const cityObj = { name };
    const city = await CityService.updateById(req.params.id, cityObj);
    return res.status(SuccessCodes.OK).json({
      data: city,
      success: true,
      message: "City updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to update city",
      error: error,
    });
  }
};

// Delete -> /cities/:id -> req.params -> {id : 1}
const deleteCity = async (req, res) => {
  try {
    const response = await CityService.deleteById(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "City deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      success: false,
      message: "Internal server error : Not able to delete city",
      error: error,
    });
  }
};

module.exports = {
  getAirportByCityId,
  createCityBulk,
  createCity,
  getAllCity,
  getCityById,
  updateCity,
  deleteCity,
};
