const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MongoURI || "mongodb://localhost:27017/counter-1207"

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));


module.exports = require('./counter')
