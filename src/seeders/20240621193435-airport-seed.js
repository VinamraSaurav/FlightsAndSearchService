'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
// Airports in India
    await queryInterface.bulkInsert('Airports', [{
      name: 'Indira Gandhi International Airport',
      address: 'New Delhi',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Chhatrapati Shivaji Maharaj International Airport',
      address: 'Mumbai',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kempegowda International Airport',
      address: 'Bangalore',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Chennai International Airport',
      address: 'Chennai',
      cityId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Netaji Subhas Chandra Bose International Airport',
      address: 'Kolkata',
      cityId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rajiv Gandhi International Airport',
      address: 'Hyderabad',
      cityId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Goa International Airport',
      address: 'Goa',
      cityId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sardar Vallabhbhai Patel International Airport',
      address: 'Ahmedabad',
      cityId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pune Airport',
      address: 'Pune',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Cochin International Airport',
      address: 'Kochi',
      cityId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Trivandrum International Airport',
      address: 'Thiruvananthapuram',
      cityId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Calicut International Airport',
      address: 'Kozhikode',
      cityId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
