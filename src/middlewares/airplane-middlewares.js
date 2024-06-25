const { ClientErrorCodes } = require("../utils/error-codes");
const validateCreateAirplane = (req, res, next) => {
  const { model, capacity } = req.body;
  if (!model || !capacity) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: null,
      success: false,
      message: "Model and capacity are required",
    });
  }
  next();
};

const validateUpdateAirplane = (req, res, next) => {
  const { model, capacity } = req.body;
  if (!model && !capacity) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: null,
      success: false,
      message: "Model or capacity is required",
    });
  }
  next();
};

module.exports = {
  validateCreateAirplane,
  validateUpdateAirplane,
};
