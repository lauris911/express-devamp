const express = require ('express')

//definir objeto de ruteo
const router = express.Router()
 
//listar todos los bootcamp
router.get('/', (req , resp)=>{
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": "aqui van a salir todos los Courses"
    })
 })

//Listar bootcamp por id
router.get('/:id', (req , resp)=>{
    //console.log(req.params.id)
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": `aqui va a salir el Courses cuyo id es : ${req.params.id}`
    })
 })

 //crear nuevo bootcamp
 router.post('/', (req , resp)=>{
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": "aqui vammos a regstrar Courses"
    })
 })

 
//Actualizar bootcamp
router.put('/:id', (req , resp)=>{
    //console.log(req.params.id)
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": `aqui va a actualizarse el Courses cuyo id es : ${req.params.id}`
    })
 })

//borrar bootcamp
router.delete('/:id', (req , resp)=>{
    //console.log(req.params.id)
    resp
    .status(200)
    .json({
        "succes" : true,
        "data": `aqui va a borrarse el Courses cuyo id es : ${req.params.id}`
    })
 })

 module.exports = router