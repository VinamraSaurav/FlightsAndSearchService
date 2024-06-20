const {City} = require('../models/index');

class CityRepository {
    async createCity({name}) {
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Error in CityRepository");
            throw error;
        }
    }
    
    async getAllCity() {
        try{
            const getCity = await City.findAll();
            return getCity;
        }catch(error){
            console.log("Error in CityRepository");
            throw error;
        }
    }
    
    async getCity(cityId) {
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Error in CityRepository");
            throw error;
        }
    }
    
    async updateCity(cityId, cityDetails) {
        try{
            await City.update(cityDetails, {
                where: {
                    id:cityId,
                }
            });
        }catch(error){
            console.log("Error in CityRepository");
            throw error;
        }
    }
    
    async deleteCity(id) {
        try{
            await City.destroy({
                where: {
                    id:id,
                }
            });
        }catch(error){
            console.log("Error in CityRepository");
            throw error;
        }
    }
}


module.exports = new CityRepository();


/**

 */