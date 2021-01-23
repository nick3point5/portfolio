const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SoupModel = new Schema ({
    name:  {
        type: String,
        required: true
    },
    price:  {
        type: Number,
        required: true
    },
    qty:  {
        type: Number,
        required: true
    },
    recipe:  [{
        type: Schema.Types.ObjectId,
        ref: 'recipe'
    }],
})

module.exports = mongoose.model('soupAisle', SoupModel)