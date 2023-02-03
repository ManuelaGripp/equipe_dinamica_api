const mongoose = require('mongoose')

const membersSchema = new mongoose.Schema({
    name:String,
    position:String,
    picture:String
})

module.exports = mongoose.model('Membro', membersSchema)