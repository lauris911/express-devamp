const express = require ('express')

const{
    getAllUser,
    createUser,
    updateUser,
    delateUser,
    getSingleUser
} = require('../controllers/UserController')


//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllUser)
            .post(createUser)

//crear rutas con parametro
router.route('/:id') 
            .get(getSingleUser)
            .put(updateUser)
            .delete(delateUser)
 module.exports = router

