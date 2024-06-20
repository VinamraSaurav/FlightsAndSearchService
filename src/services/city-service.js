const { CityRepository }=require('../repository/index');


class CityService{
    constructor(){
        this.cityRepository= new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
        }catch(error){
            console.log("Error in CityService");
            throw error;
        }
    }
    async getAllCity(){
        try{
            const cities = await this.cityRepository.getAllCity();
            return cities;
        }catch(error){
            console.log("Error in CityService");
            throw error;
        }
    }
    async getCityById(cityId){
        try{
            const city = await this.cityRepository.getCityById(cityId);
            return city;
        }catch(error){
            console.log("Error in CityService");
            throw error;
        }
    }
    async updateCity(cityId, cityDetails){
        try{
            const city = await this.cityRepository.updateCity(cityId, cityDetails);
            return city;
        }catch(error){
            console.log("Error in CityService");
            throw error;
        }
    }
    async deleteCity(id){
        try{
            const response = await this.cityRepository.deleteCity(id);
            return response;
        }catch(error){
            console.log("Error in CityService");
            throw error;
        }
    }
}

module.exports=CityService;