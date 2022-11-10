'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title: {
       type:DataTypes.STRING,
       allowNull: false,
       validate: {
 
         unique(value) {
           
           return courses.findOne({where:{title:value}})
             .then((title) => {
               if (title) {
                 throw new Error('Error hay mas de un nombre asi');
               }
             })
         },
 
      isAlpha: {
 
           args:true,
           msg: 'title debe tener solo letras'
         },
         notNull: {
           args:true,
           msg: 'title debe estar presente'
         },
         notEmpty: {
           args:true,
           msg: 'title no debe ser vacio'
         },
 
         
       },
    
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

        unique(value) {
          
          return courses.findOne({where:{description:value}})
            .then((description) => {
              if (description) {
                throw new Error('Error hay mas de una descripcion asi');
              }
            })
        },

     isAlpha: {

          args:true,
          msg: 'description debe tener solo letras'
        },
        notNull: {
          args:true,
          msg: 'description debe estar presente'
        },
        notEmpty: {
          args:true,
          msg: 'description no debe ser vacio'
        },

        
      },},
    weeks: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
     isInt: {

          args:true,
          msg: 'title debe tener solo numeros'
        },
        notNull: {
          args:true,
          msg: 'title debe estar presente'
        },
        notEmpty: {
          args:true,
          msg: 'title no debe ser vacio'
        },

        
      },
   
   },
   
   enroll_cost: {
    type: DataTypes.FLOAT,
    validate:{
      isFloat:{
        args: true,
        msg: 'solo puede tenr números'
      }
    }
  },
    minimum_skill:{
      type:DataTypes.STRING,
      allowNull: false,
      validate: {

     isAlpha: {

          args:true,
          msg: 'minimum_skill debe tener solo letras'
        },
        notNull: {
          args:true,
          msg: 'minimum_skill debe estar presente'
        },
        notEmpty: {
          args:true,
          msg: 'minimum_skill no debe ser vacio'
        },

        
      },
   
   },
   bootcamp_id:{
    type:DataTypes.INTEGER,
    allowNull: false,
      validate: {
     isInt: {

          args:true,
          msg: 'bootcamp_id debe tener solo numeros'
        },
        notNull: {
          args:true,
          msg: 'bootcamp_id debe estar presente'
        },
        notEmpty: {
          args:true,
          msg: 'bootcamp_id no debe ser vacio'
        },

        
      },
   
   }
  },
  
  {
    sequelize,
    modelName: 'courses',
    timestamps: false,
  });
  return courses;
};