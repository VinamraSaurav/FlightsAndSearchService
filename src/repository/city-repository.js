const { City, Airport } = require("../models/index");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
    this.City = City;
  }
  
  async getAirportByCityId(data) {
    try {
      if(data.cityId){
      const city = await this.City.findByPk(data.cityId, {
        include: Airport,
      });
      return city;
      }
      const cities = await this.City.findAll({
        include: Airport,
      });
      return cities;
    } catch (error) {
      console.log("Error in CityRepository");
      throw error;
    }
  }

  async createCityBulk(data) {
    try {
      const createdCities = await this.City.bulkCreate(data); // Here, data expects an array of objects.. eg. [{name : "city name"}, {name : "city name"}]
      return createdCities;
    } catch (error) {
      console.log("Error in CityRepository");
      throw error;
    }
  }

}

module.exports = new CityRepository();
