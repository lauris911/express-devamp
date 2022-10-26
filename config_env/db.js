const mongoose = require('mongoose')



//const uri= 'mongodb+srv://Laura911:Jhuliana911@cluster0.wpuegju.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'

const uri = 'mongodb://localhost:27017/bootcamps-sena'
//componente de conexion a BD
//tipo: funcional
 
const connectBD = async() => {
    const conn = await mongoose.connect(uri , {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectBD()