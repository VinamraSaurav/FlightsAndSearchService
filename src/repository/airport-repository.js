const { Airport } = require('../models/index');
const { Op } = require("sequelize");

class AirportRepository {
    constructor(){
        this.Airport = Airport;
    }

    async createAirport(data){
        try{
            const airport = await this.Airport.create(data);
            return airport;
        }catch(error){
            console.log("Error in AirportRepository");
            throw error;
        }
    }

    async updateAirport(airportId, airportDetails){
        try{
            const airport = await this.Airport.update(airportDetails, {
                where :{
                    id : airportId,
                }
            });
            return airport;
        }
        catch(error){
            console.log("Error in AirportRepository");
            throw error;
        }
    }

    async getAllAirport(filter){
        try{
            if(filter.name){
                const airports = await this.Airport.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name,
                        }
                    }
                });
                return airports;
            }
            const airports = await this.Airport.findAll();
            return airports;
        }catch(error){
            console.log("Error in AirportRepository");
            throw error;
        }
    }

    async getAirportById(airportId){
        try{
            const airport = await this.Airport.findByPk(airportId);
            return airport;
        }catch(error){
            console.log("Error in Airport Repository");
            throw error;
        }
    }

    async deleteAirport(airportId){
        try{
            const airport = await this.Airport.destroy({
                where : {
                    id : airportId,
                }
            });
            return airport;
        }catch(error){
            console.log("Error in Airport Repository");
            throw error;
        }
    }
}

module.exports = new AirportRepository();