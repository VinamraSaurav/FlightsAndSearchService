const { Op } = require("sequelize");

class CrudRepository {
    constructor (model) {
        this.Model = model;
    }

    async create (data) {
        try{
            const response = await this.Model.create(data);
            return response;
        }
        catch(error){
            console.log("Error in crud repository");
            throw error;
        }
    }

    async getById (id) {
        try{
            const response = await this.Model.findByPk(id);
            return response;
        }
        catch(error){
            console.log("Error in crud repository");
            throw error;
        }
    }

    async getAll (filter){
        try{
            if(filter.name){
                const response = await this.Model.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name,
                        }
                    }
                });
                return response;
            }
            const response = await this.Model.findAll();
            return response;
        }
        catch(error){
            console.log("Error in crud repository");
            throw error;
        }
    }

    async updateById (id, data){
        try{
            const response = await this.Model.update(data,{
                where:{
                    id : id,
                }
            })
            return response;
        }
        catch(error){
            console.log("Error in crud repository");
            throw error;
        }
    }

    async deleteById (id){
        try{
            const response = await this.Model.destroy({
                where:{
                    id : id,
                }
            })
            return response;
        }
        catch(error){
            console.log("Error in crud repository");
            throw error;
        }
    }

}

module.exports = CrudRepository;