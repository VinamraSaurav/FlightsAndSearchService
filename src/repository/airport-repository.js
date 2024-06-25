const { Airport } = require("../models/index");
const { Op } = require("sequelize");
const CrudRepository = require("./crud-repository");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = new AirportRepository();
