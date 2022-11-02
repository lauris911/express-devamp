'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('courses', [{
        title: 'Java',
        description: 'Botcamp for java',
        weeks: 5,
        enroll_cost: 45000,
        minimum_skill:2,
        bootcamp_id : 1
      },
      {
        title: 'PHP',
        description: 'php rating',
        weeks: 6,
        enroll_cost: 26000,
        minimum_skill:2,
        bootcamp_id : 2
      },
      {
        title: 'diseño',
        description: 'diseñar',
        weeks: 4,
        enroll_cost: 50000,
        minimum_skill:2,
        bootcamp_id : 3
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
