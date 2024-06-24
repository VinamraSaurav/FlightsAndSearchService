const { CityRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class CityService extends CrudService {

  constructor() {
    super(CityRepository);
     this.cityRepository = CityRepository;
  }

  async getAirportByCityId(data) {
    try{
      const city = await this.cityRepository.getAirportByCityId(data);
      return city;
    }
    catch(error){
      console.log("Error in CityService");
      throw error;
    }
  }

  async createCityBulk(data){
    try{
      const city = await this.cityRepository.createCityBulk(data);
      return city;
    }
    catch(error){
      console.log("Error in CityService");
      throw error;
    }
  }

}

module.exports = new CityService();
