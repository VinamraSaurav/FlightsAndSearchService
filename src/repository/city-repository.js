const { City, Airport } = require("../models/index");
const { Op} = require("sequelize");

class CityRepository {
  constructor() {
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

  async createCity({ name }) {
    try {
      const city = await this.City.create({ name });
      return city;
    } catch (error) {
      console.log("Error in CityRepository");
      throw error;
    }
  }

  async getAllCity(filter) {
    try {
      if(filter.name){
        const getCity = await this.City.findAll({
          where :{
            name : {
              [Op.startsWith] : filter.name,
            }
          }
        });
        return getCity;
      }
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
