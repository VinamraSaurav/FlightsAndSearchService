const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareArrivalTimeAndDepartureTime } = require("../helpers/helper");

class FlightService {
  constructor() {
    this.flightRepository = FlightRepository;
    this.airplaneRepository = AirplaneRepository;
  }

  async createFlight(data) {
    try {
      if (
        !compareArrivalTimeAndDepartureTime(
          data.arrivalTime,
          data.departureTime
        )
      )
        throw { error: "Arrival time should be greater than departure time" };

      const airplane = await this.airplaneRepository.getById(data.airplaneId);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Error in FlightService");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      const flights = await this.flightRepository.getAllFlights(filter);
      return flights;
    } catch (error) {
      console.log("Error in FlightService");
      throw error;
    }
  }

  async getFlightById(flightId) {
    try {
      const flight = await this.flightRepository.getFlightById(flightId);
      return flight;
    } catch (error) {
      console.log("Error in FlightService");
      throw error;
    }
  }

  async updateFlight(flightId, flightDetails) {
    try {
      const flight = await this.flightRepository.updateFlight(
        flightId,
        flightDetails
      );
      return flight;
    } catch (error) {
      console.log("Error in FlightService");
      throw error;
    }
  }

  async deleteFlight(flightId) {
    try {
      const flight = await this.flightRepository.deleteFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Error in FlightService");
      throw error;
    }
  }
}

module.exports = new FlightService();
