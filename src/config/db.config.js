const mongoose = require('mongoose');


async function connectMongoDB(){
    try{
        const connectionInstant = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected HOST:', connectionInstant.connection.host);
        console.log('Database Name:', connectionInstant.connection.db.databaseName);
    }catch(err){
        console.log('MongoDB connection error:', err);
        process.exit(1);
    }
}

module.exports = connectMongoDB;