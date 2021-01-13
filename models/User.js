const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    occupation: {
        type: String,
        required:true
    },
    age: {
        type: Number,
        required:true
    }
})

const User = mongoose.model('User', user)
module.exports = User