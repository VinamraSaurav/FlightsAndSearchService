const { Op } = require('sequelize');
const { Flight } = require('../models/index');

class FlightRepository {

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

    async getAllFlight(filter) {
        try {
            const flights = await this.Flight.findAll({ where: filter });
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
            const flight = await this.Flight.update(flightDetails, { where: { id: flightId } });
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