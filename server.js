//1.crear el objeto express
const express = require ('express')

//2. citar las dependencias necesarias
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const listEndpoint = require ('express-list-endpoints')

//las rutas componentes de ruta
const bootcampRoutes = require ('./routes/BootcampRoutes')
const CoursesRoutes = require ('./routes/CoursesRoutes')
const UserRoutes = require ('./routes/UserRoutes')
const ReviewRoutes = require ('./routes/ReviewsRoutes')


//3.Establecer archivo de configuracion 
dotenv.config({
    path:'./config/config.env'
})

console.log(process.env.Port)

//crear el objeto aplication
//para el servidor de dearrollo
 const app = express()

 //validemos el objeto de application
 //para recibir datod en formato js
 app.use(express.json())

 //conexion a bd
 connectDB()

 //rutas de  proyecto
 app.use('/api/v1/bootcamps', bootcampRoutes)
 app.use('/api/v1/Courses', CoursesRoutes)
 app.use('/api/v1/User', UserRoutes)
 app.use('/api/v1/Review', ReviewRoutes)


 //endpoint de aplicacion
 app.get('/' , (request , response) =>{
    response.status(200)
    .json({
        "succes":true,
        "data" : "request exitosa"
    })
 })

 //endpoint de dominio

 //imprimir la lista de emdpoint
 //validas de proyecto



 //ejecutar el servidor de desarrollo
 //parametros:
 //puertos de escucha -
 app.listen( process.env.PORT ,()=>{
    console.log(`servidor activo en puerto 5000`.bgGreen.blue)
 })