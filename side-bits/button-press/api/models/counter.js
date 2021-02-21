const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Count = new Schema ({
  title:  {
    type: String,
    required: true
  },
  count:  {
    type: Number,
    required: true
  },
  lastTick:  {
    type: Date,
    required: true
  },
})

module.exports = mongoose.model('ticker', Count);