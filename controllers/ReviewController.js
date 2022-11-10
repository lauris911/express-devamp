//dependencias
//el onjeto de conexion:
const sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo 
const ReviewModel = require('../models/reviews')

//crear la entidad 
const Review = ReviewModel(sequelize, DataTypes)
 
//listar todos los Reviews
exports.getAllReview = async (req, resp) => {
    try {
      //tarer los usuarios
      const reviews = await Review.findAll();
      resp
        .status(200)
        .json({
          "succes": true,
          "data": reviews
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

//Listar Reviews por id
exports.getSingleReview = async (req, resp) => {
    try {
      const singleReview = await Review.findByPk(req.params.id)
      if (singleReview) {
        resp
          .status(200)
          .json({
            "success": true,
            "data": singleReview
          })
      } else {
        resp
          .status(200)
          .json({
            "success": false,
            "errors": "review no existente"
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
 
//Actualizar Reviews
exports.updateReview = async (req, res) => {
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (!singleReview) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Review no existente"
                })
        } else {
            await Review.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateReview = await Review.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateReview
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

//borrar Reviews
exports.deleteReview = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleReview = await Review.findByPk(req.params.id);
        if (!SingleReview) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await Review.destroy({
                where: {
                    id: req.params.id
                }
              });
            // const deleteReview = await Review.findByPk(req.params.id);
  
            res
            .status(200)
            .json({
                "success": true,
                "data": SingleReview
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
  //Crear nuevo Review
exports.createReview = async (req, res) => {
    try {
      const newReview = await Review.create(req.body)
      res
        .status(200)
        .json({
          "success": true,
          "data": newReview
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