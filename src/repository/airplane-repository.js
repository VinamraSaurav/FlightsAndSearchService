const { Airplane } = require('../models/index');
const {Op} = require('sequelize');

class AirplaneRepository{

    constructor(){
        this.Airplane = Airplane;
    }

    async createAirplane({model, capacity}){
        try{
            const airplane = await this.Airplane.create({model, capacity});
            return airplane;
        }
        catch(error){
            console.log("Error in airplane repository");
            throw error;
        }
    }

    async getAirplaneById(airplaneId){
        try{
            const airplane = await this.Airplane.findByPk(airplaneId);
            return airplane;
        }
        catch(error){
            console.log("Error in airplane repository");
            throw error;
        }
    }

    async getAllAirplanes(data){
        try{
            if(data.model){
                const airplanes = await this.Airplane.findAll({
                    where : {
                        [Op.startsWith] : data.model,
                    }
                });
                return airplanes;
            }
            const airplanes = await this.Airplane.findAll();
            return airplanes;
        }
        catch(error){
            console.log("Error in airplane repository");
            throw error;
        }
    }

    async updateAirplaneById(airplaneId, data){
        try{
            const airplane = await this.Airplane.update(data,{
                where:{
                    id : airplaneId,
                }
            })
            return airplane;
        }
        catch(error){
            console.log("Error in airplane repository");
            throw error;
        }
    }

    async deleteAirplaneById(airplaneId){
        try{
            const airplane = await this.Airplane.destroy({
                where:{
                    id : airplaneId,
                }
            })
            return airplane;
        }
        catch(error){
            console.log("Error in airplane repository");
            throw error;
        }
    }
}

module.exports = new AirplaneRepository();