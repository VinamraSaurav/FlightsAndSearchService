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
    await queryInterface.bulkInsert('Airplanes', [
      {
        model: 'Boeing 737',
        capacity: 215,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Boeing 747',
        capacity: 524,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Boeing 777',
        capacity: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Airbus A320',
        capacity: 186,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Airbus A380',
        capacity: 853,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'McDonnell Douglas MD-11',
        capacity: 410,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'McDonnell Douglas MD-80',
        capacity: 172,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Lockheed L-1011 TriStar',
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Concorde',
        capacity: 128,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: 'Embraer E-Jet',
        capacity: 124,
        createdAt: new Date(),
        updatedAt: new Date(),
      },     
    ], {});
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
