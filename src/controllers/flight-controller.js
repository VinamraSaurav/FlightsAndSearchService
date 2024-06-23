const { FlightService } = require('../services');

// Post -> /flights -> req.body
const createFlight = async (req, res) => {
    try {
        const flight = await FlightService.createFlight(req.body);
        res.status(200).json({
            data : flight,
            success : true,
            message : "Flight created successfully"
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : null,
            success : false,
            message : "Internal server error : Not able to create flight",
            error : error
    });
    }
}

module.exports = {
    createFlight
}