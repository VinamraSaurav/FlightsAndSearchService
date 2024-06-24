const validateCreateAirplane = (req, res, next) => {
    const { model, capacity} = req.body;
    if (!model || !capacity) {
      return res.status(400).json({
        data: null,
        success: false,
        message: "Model and capacity are required",
      });
    };
    next();
}

const validateUpdateAirplane = (req, res, next) => {
    const { model, capacity} = req.body;
    if (!model && !capacity) {
      return res.status(400).json({
        data: null,
        success: false,
        message: "Model or capacity is required",
      });
    };
    next();

}

module.exports = {
    validateCreateAirplane,
    validateUpdateAirplane
};