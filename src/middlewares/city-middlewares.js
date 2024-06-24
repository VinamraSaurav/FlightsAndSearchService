const validateCreateCity = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            data: null,
            success: false,
            message: "Missing required fields",
        });
    }
    next();
}

const validateUpdateCity = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            data: null,
            success: false,
            message: "Nothing to update",
        });
    }
    next();
}

const validateBulkCreateCity = (req, res, next) =>{
    const cities = req.body;
    if(!Array.isArray(cities)){
        return res.status(400).json({
            data: null,
            success: false,
            message: "Request body must be an array",
        });
    }

    if(cities.length === 0){
        return res.status(400).json({
            data: null,
            success: false,
            message: "Request body must not be empty",
        });
    }

    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        if (typeof city !== 'object' || city === null || !city.hasOwnProperty('name') || typeof city.name !== 'string' || !city.name) {
            return res.status(400).json({
                data: null,
                success: false,
                message: "Missing required fields. Each city must be an object and each city must have a name",
            });
        }
    }
    
    next();
}

module.exports = {
    validateCreateCity,
    validateUpdateCity,
    validateBulkCreateCity,
};