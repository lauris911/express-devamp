'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', [{
        username: 'Laura Sanabria',
        email: 'ljsanbria@misena.edu.co',
        password: '1234'
      },
    {
      username: 'paula lopez',
        email: 'plopeza@misena.edu.co',
        password: '1234'
    },
    {
      username: 'Lveronica centeno',
        email: 'verito@misena.edu.co',
        password: '1234'
    }
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
