const { AirportService} = require('../services/index');

// Post -> /airport -> req.body -> {name : "airport name", cityId : cityId}
const createAirport = async (req, res) => {
    try{
        const airport = await AirportService.createAirport(req.body);
        res.status(201).json({
            data : airport,
            success : true,
            message : "Airport created successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to create airport",
            error : error
    });
    }
}

// Get -> /airport
const getAllAirport = async (req, res) => {
    try{
        const airports = await AirportService.getAllAirport(req.query);
        res.status(200).json({
            data : airports,
            success : true,
            message : "All airports fetched successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to fetch airports",
            error : error
    });
    }
}

// Get -> /airport/:airportId
const getAirportById = async (req, res) => {
    try{
        const airport = await AirportService.getAirportById(req.params.airportId);
        res.status(200).json({
            data : airport,
            success : true,
            message : "Airport fetched successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to fetch airport",
            error : error
    });
    }
}

// Put -> /airport/:airportId -> req.body -> {name : "airport name" , cityId : cityId}
const updateAirport = async (req, res) => {
    try{
        const airport = await AirportService.updateAirport(req.params.airportId, req.body);
        res.status(200).json({
            data : airport,
            success : true,
            message : "Airport updated successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to update airport",
            error : error
    });
    }
}

// Delete -> /airport/:airportId
const deleteAirport = async (req, res) => {
    try{
        const airport = await AirportService.deleteAirport(req.params.airportId);
        res.status(200).json({
            data : airport,
            success : true,
            message : "Airport deleted successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to delete airport",
            error : error
    });
    }
}

module.exports = {
    createAirport,
    getAllAirport,
    getAirportById,
    updateAirport,
    deleteAirport
}