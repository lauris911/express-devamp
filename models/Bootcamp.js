const mongoose = require ('mongoose')

//Modelo de bootcamp
const BootcampsSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[
            true,
            "por favor,ingresa nombre"
        ],
        unique: true,
        maxlength: [
            30,
            "No se admite bootcamps > 30"
        ]
    },
    description : {
        type : String,
        required: [
            true,
            'por favor, ingrese description'
        ],
        maxlength: [
            500,
            "no se admite bootcamps >500"
        ]
    },

    phone:{
        type: String,
        maxlength:[
            20,
            "telefono no >20"
        ]
    },
    email :{
        type:String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'por favor,ingrese email valido'

        ]
    },
    averageCost:Number,
    averageRating:{
        type: Number,
        min:[1, "calificacion minima:1"],
        max:[10, "calificacion maxima ;10"]
    },

})

module.exports = mongoose.model('bootcamp' , BootcampsSchema)