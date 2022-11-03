//dependencias
//el onjeto de conexion:
const sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo 
const UserModel = require('../models/user')

//crear la entidad 
const User = UserModel(sequelize, DataTypes)

//listar todos los user
exports.getAllUser = async (req, resp) => {
  try {
    //tarer los usuarios
    const users = await User.findAll();
    resp
      .status(200)
      .json({
        "succes": true,
        "data": users
      })
  } catch (error) {
    resp
      .status(200)
      .json({
        "succes": true,
        "errors": "error de servidor desconocido"
      })
  }

}


//Listar user por id
exports.getSingleUser = async (req, resp) => {
  try {
    const singleUser = await User.findByPk(req.params.id)
    if (singleUser) {
      resp
        .status(200)
        .json({
          "success": true,
          "data": singleUser
        })
    } else {
      resp
        .status(200)
        .json({
          "success": false,
          "errors": "usuario no existente"
        })
    }

  } catch (error) {
    resp
      .status(400)
      .json({
        "success": false,
        "errors": "error de servidor"
      })
  }

}
//Actualizar users
exports.updateUser = async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (!singleUser) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "usuario no existente"
                })
        } else {
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateUser = await User.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateUser
                })
        }

    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }

}
//Borrar users 
exports.deleteUser = async (req, res)=>{
  //console.log(req.params.id)
  try {
      const SingleUser = await User.findByPk(req.params.id);
      if (!SingleUser) {
          res
          .status(400)
          .json({
              "success": false,
              "errors": "Usuario no existente"
      })
      } else {
          await User.destroy({
              where: {
                  id: req.params.id
              }
            });
      const deleteUser = await User.findByPk(req.params.id);

          res
          .status(200)
          .json({
              "success": true,
              "data": SingleUser
          })
      }
  } catch (error) {
      res
      .status(400)
      .json({
          "success": false,
          "errors": " Error de servidor desconocido"
      })
  }
  
}
//Crear nuevo user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res
      .status(200)
      .json({
        "success": true,
        "data": newUser
      })
  } catch (error) {
    if (error instanceof ValidationError) {
      //Recorrer el arreglo de errores
      //map
      const errores = error.errors.map((elemento) => elemento.message)
      res
        .status(400)
        .json({
          "success": false,
          "errors": error
        })
    } else {
      res
        .status(400)
        .json({
          "success": false,
          "errors": "error de servidor"
        })
    }
  }
}