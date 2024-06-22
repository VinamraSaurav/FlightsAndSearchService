const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository = AirportRepository;
    }

    async createAirport(data) {
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Error in AirportService");
            throw error;
        }
    }

    async getAllAirport(filter) {
        try {
            const airports = await this.airportRepository.getAllAirport({name: filter.name});
            return airports;
        } catch (error) {
            console.log("Error in AirportService");
            throw error;
        }
    }

    async getAirportById(airportId) {
        try {
            const airport = await this.airportRepository.getAirportById(airportId);
            return airport;
        } catch (error) {
            console.log("Error in AirportService");
            throw error;
        }
    }

    async updateAirport(airportId, airportDetails) {
        try {
            const airport = await this.airportRepository.updateAirport(airportId, airportDetails);
            return airport;
        } catch (error) {
            console.log("Error in AirportService");
            throw error;
        }
    }

    async deleteAirport(airportId) {
        try {
            const airport = await this.airportRepository.deleteAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Error in AirportService");
            throw error;
        }
    }
}

module.exports = new AirportService();