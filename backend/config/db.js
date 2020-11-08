const mongoose = require('mongoose');
const colors = require('colors')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log('mongodb connected: ' + conn.connection.host.cyan.underline)
    }
    catch {
        console.error('Error: ', conn.connect.error.red.underline.bold);
        process.exit(1)
    }
}


module.exports = connectDB
