const mongoose = require('mongoose')
const monSchema = new mongoose.Schema ({
    property:  {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('test', monSchema)