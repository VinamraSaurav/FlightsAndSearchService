const { AirplaneRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class AirplaneService extends CrudService {
  constructor() {
    super(AirplaneRepository);
  }

  async getAll(data) {
    try {
      const response = await this.repository.getAll({ model: data.model });
      return response;
    } catch (error) {
      console.log("Error in airplane service");
      throw error;
    }
  }
}

module.exports = new AirplaneService();
