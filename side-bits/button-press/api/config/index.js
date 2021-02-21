const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MongoURI || "mongodb://localhost:27017/counter-1207"