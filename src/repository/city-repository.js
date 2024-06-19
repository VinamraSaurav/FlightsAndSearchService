const {City} = require('../models/index');

class CityRepository {
    async create(city) {
        try{
            const city = await City.create(city);
            return city;
        }catch(error){
            throw error;
        }
    }
    
    async findAll() {
        try{
            const getCity = await City.findAll();
            return getCity;
        }catch(error){
            throw error;
        }
    }
    
    async findById(id) {
        try{
            const city = await City.findByPk(id);
            return city;
        }catch(error){
            throw error;
        }
    }
    
    async update(id, cityDetails) {
        try{
            await City.update(cityDetails, {
                where: {
                    id:id,
                }
            });
        }catch(error){
            throw error;
        }
    }
    
    async delete(id) {
        try{
            await City.destroy({
                where: {
                    id:id,
                }
            });
        }catch(error){
            throw error;
        }
    }
}


module.exports = new CityRepository();


/**
 * The CityRepository class is a class that contains methods for interacting with the City model.
 * The create method is used to create a new city.
 * The findAll method is used to retrieve all cities.
 * The findById method is used to retrieve a city by its id.
 * The update method is used to update a city by its id.
 * The delete method is used to delete a city by its id.
 * The CityRepository class is exported as a singleton instance.
 * 
 * 
 */