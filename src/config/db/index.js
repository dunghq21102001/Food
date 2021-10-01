const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/generals_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        })
        console.log('connect successfully!!!')
    } catch (error) {
        console.log('Error: ' + error)
    }
}

module.exports = {
    connect
}