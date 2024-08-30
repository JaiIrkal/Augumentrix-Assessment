const mongoose = require('mongoose')

const MongoURL = "mongodb+srv://jai:jairkal@cluster0.p8to3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async() => {
    try {
        const {connection} = await mongoose.connect(MongoURL, {
            dbName:"Blog"
        })
        console.log(`Server connected to database: ${connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB