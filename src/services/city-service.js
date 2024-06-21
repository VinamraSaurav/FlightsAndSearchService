const { CityRepository } = require("../repository/index");

class CityService {

  constructor() {
     this.cityRepository = CityRepository;
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

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Error in CityService");
      throw error;
    }
  }

  async getAllCity(filter) {
    try {
      const cities = await this.cityRepository.getAllCity({name : filter.name});
      return cities;
    } catch (error) {
      console.log("Error in CityService");
      throw error;
    }
  }

  async getCityById(cityId) {
    try {
      const city = await this.cityRepository.getCityById(cityId);
      return city;
    } catch (error) {
      console.log("Error in CityService");
      throw error;
    }
  }

  async updateCity(cityId, cityDetails) {
    try {
      const city = await this.cityRepository.updateCity(cityId, cityDetails);
      return city;
    } catch (error) {
      console.log("Error in CityService");
      throw error;
    }
  }

  async deleteCity(id) {
    try {
      const response = await this.cityRepository.deleteCity(id);
      return response;
    } catch (error) {
      console.log("Error in CityService");
      throw error;
    }
  }
}

module.exports = new CityService();
