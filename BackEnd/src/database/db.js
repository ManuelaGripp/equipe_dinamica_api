const mongoose = require('mongoose');
const secrets = require('../secrets')

function connect(){

    mongoose.set('strictQuery', true);

     mongoose.connect(secrets.getConnectionString())

    const db = mongoose.connection

    db.once('open', ()=>{
        console.log('Connected to database')
    })

    db.on('error',console.error.bind(console,"Connection error: "))

}

module.exports = {connect}

