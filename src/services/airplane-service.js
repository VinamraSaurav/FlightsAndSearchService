const { AirplaneRepository } = require('../repository/index');

class AirplaneService {
    constructor(){
        this.Airplane = AirplaneRepository;
    }

    async createAirplane(data){
        try{
            const airplane = await this.Airplane.createAirplane(data);
            return airplane;
        }
        catch(error){
            console.log("Error in airplane service");
            throw error;
        }
    }

    async getAirplaneById(airplaneId){
        try{
            const airplane = await this.Airplane.getAirplaneById(airplaneId);
            return airplane;
        }
        catch(error){
            console.log("Error in airplane service");
            throw error;
        }
    }

    async getAllAirplanes(data){
        try{
            const airplanes = await this.Airplane.getAllAirplanes({model : data.model});
            return airplanes;
        }
        catch(error){
            console.log("Error in airplane service");
            throw error;
        }
    }

    async updateAirplaneById(airplaneId, data){
        try{
            const airplane = await this.Airplane.updateAirplaneById(airplaneId, data);
            return airplane;
        }
        catch(error){
            console.log("Error in airplane service");
            throw error;
        }
    }

    async deleteAirplaneById(airplaneId){
        try{
            const airplane = await this.Airplane.deleteAirplaneById(airplaneId);
            return airplane;
        }
        catch(error){
            console.log("Error in airplane service");
            throw error;
        }
    }

}

module.exports = new AirplaneService();