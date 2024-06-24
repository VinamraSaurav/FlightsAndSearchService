const validateCreateAirport = (req, res, next) => {
    const { name, address, cityId } = req.body;
    if (!name || !cityId) {
        return res.status(400).json({
            data: null,
            success: false,
            message: "All fields are required",
        });
    };
    next();
}

const validateUpdateAirport = (req, res, next) => {
    const { name, address, cityId } = req.body;
    if (!name && !address && !cityId) {
        return res.status(400).json({
            data: null,
            success: false,
            message: "Atleast one field is required to update",
        });
    };
    next();
}

module.exports = {
    validateCreateAirport,
    validateUpdateAirport
}