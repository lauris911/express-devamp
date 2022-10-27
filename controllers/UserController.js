//dependencias
//el onjeto de conexion:
const sequelize =require('../config/seq')
//datatypes de sequelize
const { DataTypes} = require ('sequelize')

//el modelo 
const UserModel = require ('../models/user')

//crear la entidad 
const User = UserModel(sequelize, DataTypes)

//listar todos los user
exports.getAllUser = async (req , resp)=>{
    //tarer los usuarios
    const users = await User.findAll();
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": users
    })
 }


//Listar user por id
exports.getSingleUser = async (req , resp)=>{
    //console.log(req.params.id)
    const SingleUser = await User.findByPk(req.params.id);
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": SingleUser
    })
 }
//Actualizar user
exports.updateUser =  async (req , resp)=>{
    // Change everyone without a last name to "Doe"
await User.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  const SingleUser = await User.findByPk(req.params.id);
    //console.log(req.params.id)
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": SingleUser
    })
 }
 //borrar user
 exports.delateUser = async (req , resp)=>{
    const SingleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
    //console.log(req.params.id)
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": SingleUser
    })
 }

  //crear nuevo user
  exports.createUser =  async (req , resp)=>{
    
    const newUser = await User.create(req.body)
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": newUser
    } )
 }

