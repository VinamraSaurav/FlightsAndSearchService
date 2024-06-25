class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("Error in crud service");
      throw error;
    }
  }

  async getById(id) {
    try {
      const response = await this.repository.getById(id);
      return response;
    } catch (error) {
      console.log("Error in crud service");
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.repository.getAll({ name: data.name });
      return response;
    } catch (error) {
      console.log("Error in crud service");
      throw error;
    }
  }

  async updateById(id, data) {
    try {
      const response = await this.repository.updateById(id, data);
      return response;
    } catch (error) {
      console.log("Error in crud service");
      throw error;
    }
  }

  async deleteById(id) {
    try {
      const response = await this.repository.deleteById(id);
      return response;
    } catch (error) {
      console.log("Error in crud service");
      throw error;
    }
  }
}

module.exports = CrudService;
