const { AirplaneService } = require('../services/index');

// Post -> /airplane -> req.body -> {model, capacity}
const createAirplane = async (req, res) => {
    try {
        const airplane = await AirplaneService.createAirplane(req.body);
        res.status(201).json({
            data : airplane,
            success : true,
            message : "Airplane created successfully",
        });
    } catch (error) {
        res.status(400).json({
            data : null,
            success : false,
            message : "Error in creating airplane",
            error : error,
        });
    }
}

// Get -> /airplane/:airplaneId -> req.params -> {airplaneId}
const getAirplaneById = async (req, res) => {
    try {
        const airplane = await AirplaneService.getAirplaneById(req.params.airplaneId);
        res.status(200).json({
            data : airplane,
            success : true,
            message : "Airplane fetched successfully",
        });
    } catch (error) {
        res.status(400).json({
            data : null,
            success : false,
            message : "Error in fetching airplane",
            error : error,
        });
    }
}

// Get -> /airplane?model -> req.query -> {model}
const getAllAirplanes = async (req, res) => {
    try {
        const airplanes = await AirplaneService.getAllAirplanes(req.query);
        res.status(200).json({
            data : airplanes,
            success : true,
            message : "All airplanes fetched successfully",
        });
    } catch (error) {
        res.status(400).json({
            data : null,
            success : false,
            message : "Error in fetching airplanes",
            error : error,
        });
    }
}

// Put -> /airplane/:airplaneId -> req.params -> {airplaneId}, req.body -> {model, capacity}
const updateAirplaneById = async (req, res) => {
    try {
        const airplane = await AirplaneService.updateAirplaneById(req.params.airplaneId, req.body);
        res.status(200).json({
            data : airplane,
            success : true,
            message : "Airplane updated successfully",
        });
    } catch (error) {
        res.status(400).json({
            data : null,
            success : false,
            message : "Error in updating airplane",
            error : error,
        });
    }
}

// Delete -> /airplane/:airplaneId -> req.params -> {airplaneId}
const deleteAirplaneById = async (req, res) => {
    try {
        const airplane = await AirplaneService.deleteAirplaneById(req.params.airplaneId);
        res.status(200).json({
            data : airplane,
            success : true,
            message : "Airplane deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            data : null,
            success : false,
            message : "Error in deleting airplane",
            error : error,
        });
    }
}

module.exports = {
    createAirplane,
    getAirplaneById,
    getAllAirplanes,
    updateAirplaneById,
    deleteAirplaneById,
};