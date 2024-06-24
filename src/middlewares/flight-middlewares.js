const validateCreateFlight = (req, res, next) => {
    const {
        flightName,
        airplaneId,
        arrivalAirportId,
        departureAirportId,
        arrivalTime,
        departureTime,
        price,
    } = req.body;

    if (!flightName || !airplaneId || !arrivalAirportId || !departureAirportId || !arrivalTime || !departureTime || !price) {
        return res.status(400).json({
            data: null,
            success: false,
            message: "Missing required fields",
        });
    }
    next();
}


const validateUpdateFlight = (req, res, next) => {
    const {
        flightName,
        airplaneId,
        arrivalAirportId,
        departureAirportId,
        arrivalTime,
        departureTime,
        price,
        totalSeats,
        boardingGate,
    } = req.body;

    if (flightName && airplaneId && totalSeats ) {
        return res.status(400).json({
            data: null,
            success: false,
            message: "Requested fields cannot be updated",
        });
    }

    if( !arrivalAirportId && !departureAirportId && !arrivalTime && !departureTime && !price && !boardingGate) {
        return res.status(400).json({
            data: null,
            success: false,
            message: "No fields to update",
        });
    }

    next();
}

module.exports = {
    validateCreateFlight,
    validateUpdateFlight
};