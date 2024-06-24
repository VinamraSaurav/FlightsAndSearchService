const { Op } = require("sequelize");
const { Flight } = require("../models/index");

class FlightRepository {
  // private method
  #createFilter(filter) {
    let newFilter = {};
    if (filter.flightNumber) {
      newFilter.flightNumber = filter.flightNumber;
    }
    if (filter.airplaneId) {
      newFilter.airplaneId = filter.airplaneId;
    }
    if (filter.departureAirportId) {
      newFilter.departureAirportId = filter.departureAirportId;
    }
    if (filter.arrivalAirportId) {
      newFilter.arrivalAirportId = filter.arrivalAirportId;
    }
    if (filter.departureDate) {
      newFilter.departureDate = filter.departureDate;
    }
    if (filter.arrivalDate) {
      newFilter.arrivalDate = filter.arrivalDate;
    }
    if (
      filter.minPrice &&
      filter.maxPrice &&
      filter.minPrice > filter.maxPrice
    ) {
      throw { error: "Minimum price should be less than maximum price" };
    }
    
    if (filter.maxPrice) {
      Object.assign(newFilter, { price: { [Op.lte]: filter.maxPrice } });
    }
    if (filter.minPrice) {
      Object.assign(newFilter, { price: { [Op.gte]: filter.minPrice } });
    }
    if (filter.minPrice && filter.maxPrice) {
        Object.assign(newFilter, {
          price: { [Op.between]: [filter.minPrice, filter.maxPrice] },
        });
      }
    return newFilter;
  }

  constructor() {
    this.Flight = Flight;
  }

  async createFlight(data) {
    try {
      const flight = await this.Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Error in FlightRepository");
      throw error;
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObj = this.#createFilter(filter);
      const flights = await this.Flight.findAll({ where: filterObj });
      return flights;
    } catch (error) {
      console.log("Error in FlightRepository");
      throw error;
    }
  }

  async getFlightById(flightId) {
    try {
      const flight = await this.Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Error in FlightRepository");
      throw error;
    }
  }

  async updateFlight(flightId, flightDetails) {
    try {
      const flight = await this.Flight.update(flightDetails, {
        where: { id: flightId },
      });
      return flight;
    } catch (error) {
      console.log("Error in FlightRepository");
      throw error;
    }
  }

  async deleteFlight(flightId) {
    try {
      const flight = await this.Flight.destroy({ where: { id: flightId } });
      return flight;
    } catch (error) {
      console.log("Error in FlightRepository");
      throw error;
    }
  }
}

module.exports = new FlightRepository();
