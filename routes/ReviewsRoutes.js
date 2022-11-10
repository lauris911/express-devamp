const express = require ('express')

const{
    getAllReview,
    createReview,
    updateReview,
    deleteReview,
    getSingleReview
} = require('../controllers/ReviewController')


//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllReview)
            .post(createReview)

//crear rutas con parametro
router.route('/:id') 
            .get(getSingleReview)
            .put(updateReview)
            .delete(deleteReview)


 module.exports = router