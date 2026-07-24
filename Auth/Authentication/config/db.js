const mongoose = require ("mongoose");

const connectDB = async() => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected successfully")
        console.log(`HOST: ${db.connection.host}`)
        console.log(`Database: ${db.connection.name}`)
    }
    catch(error){
        console.log("Mongodb connection failed")
        console.log(error.message)
        process.exit(1);
    }
}

module.exports = connectDB;