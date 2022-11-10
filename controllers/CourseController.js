//dependencias
//el onjeto de conexion:
const sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo 
const CourseModel = require('../models/courses')

//crear la entidad 
const Course = CourseModel(sequelize, DataTypes)
 
//listar todos los Courses
exports.getAllCourse = async (req, resp) => {
    try {
      //tarer los usuarios
      const Courses = await Course.findAll();
      resp
        .status(200)
        .json({
          "succes": true,
          "data": Courses
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

//Listar Courses por id
exports.getSingleCourse = async (req, resp) => {
    try {
      const singleCourse = await Course.findByPk(req.params.id)
      if (singleCourse) {
        resp
          .status(200)
          .json({
            "success": true,
            "data": singleCourse
          })
      } else {
        resp
          .status(200)
          .json({
            "success": false,
            "errors": "course no existente"
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
 
//Actualizar Courses
exports.updateCourse = async (req, res) => {
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if (!singleCourse) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Course no existente"
                })
        } else {
            await Course.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateCourse = await Course.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateCourse
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

//borrar Courses
exports.deleteCourse = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleCourse = await Course.findByPk(req.params.id);
        if (!SingleCourse) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await Course.destroy({
                where: {
                    id: req.params.id
                }
              });
            // const deleteCourse = await Course.findByPk(req.params.id);
  
            res
            .status(200)
            .json({
                "success": true,
                "data": SingleCourse
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
  //Crear nuevo Course
exports.createCourse = async (req, res) => {
    try {
      const newCourse = await Course.create(req.body)
      res
        .status(200)
        .json({
          "success": true,
          "data": newCourse
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
            "errors": errores
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