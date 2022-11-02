'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //crear la columna 'user_id' FK con users
   //addcolumn: parametros:
   //  1.la tabla en la cual poner la nueva coumna
   //  2. el nombre de la nueva columna 
   //  3.opciones de la nueva columna 
   await queryInterface.addColumn('reviews',
   'bootcamp_id',
   {
     type: Sequelize.INTEGER,
     references: {
       model: 'bootcamps',
       key: 'id' 
     },
     onUpdate:  'CASCADE',
     onDelete: 'SET NULL'
   }),
   await queryInterface.addColumn('reviews',
   'user_id',
   {
     type: Sequelize.INTEGER,
     references: {
       model: 'users',
       key: 'id' 
     },
     onUpdate:  'CASCADE',
     onDelete: 'SET NULL'
   })
  },

  async down (queryInterface, Sequelize) {
     //METODO REMOVE COLUMN
    //PARAMETROS
    //  1. la tabla de donde vas a remover
    //2. la columna a eliminar 

    await queryInterface.removeColumn('reviews', 'bootcamp_id')
    await queryInterface.removeColumn('reviews', 'user_id')
  }
};
