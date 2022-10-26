const sequelize = require('./seq')
const colors = require('colors')
const{DataTypes} = require('sequelize')

//crear una instancia
const UserModel = require ('../models/user')
const User = UserModel(sequelize, DataTypes)

//Definir la función de conexión a la base de datos

const connectDB = async () => {
    try{
        //Conectarse a la base de datos
        await sequelize.authenticate()
        console.log('Conectado a mysql'.bgMagenta.black)
        const jane = await User.create({ 
            username: "Jane",
             email: "DoeQ@sena.edu",
             password :"1234" });
console.log("Jane's auto-generated ID:", jane.id);
    } catch(error){
        console.log(error)
    }
}

connectDB()