const mongoose = require('mongoose')
const Schema = mongoose.Schema
const monSchema = new Schema ({
    name:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
},{timestamps: true})

module.exports = mongoose.model('user', monSchema);