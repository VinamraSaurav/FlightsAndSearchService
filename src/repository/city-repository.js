const { City } = require("../models/index");

class CityRepository {
  constructor() {
    this.City = City;
  }

  async createCity({ name }) {
    try {
      const city = await this.City.create({ name });
      return city;
    } catch (error) {
      console.log("Error in CityRepository");
      throw error;
    }
  }

  async getAllCity() {
    try {
      const getCity = await this.City.findAll();
      return getCity;
    } catch (error) {
      console.log("Error in CityRepository");
      throw error;
    }
  }

  async getCityById(cityId) {
    try {
      const city = await this.City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Error in CityRepository");
      throw error;
    }
  }

  async updateCity(cityId, cityDetails) {
    try {
      const city = await this.City.update(cityDetails, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Error in CityRepository");
      throw error;
    }
  }

  async deleteCity(id) {
    try {
      await this.City.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log("Error in CityRepository");
      throw error;
    }
  }
}

module.exports = new CityRepository();
