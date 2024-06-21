const { CityService } = require('../services/index');


// Post -> /city/bulk -> req.body -> [{name : "city name"}]
const createCityBulk = async (req, res) => {
    try{
        const cities = await CityService.createCityBulk(req.body);
        res.status(201).json({
            data : cities,
            success : true,
            message : "Cities created successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to create cities",
            error : error
    });
    }
}

// Post -> /city -> req.body -> {name : "city name"}
const createCity = async (req, res) => {
    try{
        const city = await CityService.createCity(req.body);
        res.status(201).json({
            data : city,
            success : true,
            message : "City created successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to create city",
            error : error
    });
    }
}

// Get -> /city
const getAllCity = async (req, res) => {
    try{
        const cities = await CityService.getAllCity(req.query);
        res.status(200).json({
            data : cities,
            success : true,
            message : "All cities fetched successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to get all city",
            error : error
    });
    }
}

// Get -> /city/:id -> req.params -> {id : 1}
const getCityById = async (req, res) => {
    try{
        const city = await CityService.getCityById(req.params.id);
        res.status(200).json({
            data : city,
            success : true,
            message : "City fetched successfully by id"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to get city by id",
            error : error
    });
    }
}

// Put -> /city/:id -> req.params -> {id : 1} -> req.body -> {name : "city name"}
const updateCity = async (req, res) => {
    try{
        const city = await CityService.updateCity(req.params.id, req.body);
        res.status(200).json({
            data : city,
            success : true,
            message : "City updated successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to update city",
            error : error
    });
    }
}

// Delete -> /city/:id -> req.params -> {id : 1}
const deleteCity = async (req, res) => {
    try{
        const response = await CityService.deleteCity(req.params.id);
        res.status(200).json({
            data : response,
            success : true,
            message : "City deleted successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to delete city",
            error : error
    });
    }
}

module.exports = {
    createCityBulk,
    createCity,
    getAllCity,
    getCityById,
    updateCity,
    deleteCity
}