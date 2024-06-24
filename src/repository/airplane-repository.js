const { Airplane } = require('../models/index');
const {Op} = require('sequelize');
const CrudRepository = require('./crud-repository');

class AirplaneRepository extends CrudRepository{

    constructor(){
        super(Airplane);
        this.Airplane = Airplane;
    }


    async getAll(data){
        try{
            if(data.model){
                const airplanes = await this.Airplane.findAll({
                    where : {
                        model : {
                        [Op.startsWith] : data.model,
                        }
                    }
                });
                return airplanes;
            }
            const airplanes = await this.Airplane.findAll();
            return airplanes;
        }
        catch(error){
            console.log("Error in airplane repository");
            console.log(error);
            throw error;
        }
    }


}

module.exports = new AirplaneRepository();