const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const company = new Schema({
    name:{
        type: String,
        required: true
    },
    founded:{
        type: Date,
    },
    employees:{
        type: Number
    },
    active:{
        type: Boolean
    },
    products:{
        type: [String]
    },
    Ceo:{       
        name: {
            type: String
        },
        age: {
            type: Number
        }
    },

})

const companyModel = mongoose.model('companies', company);
module.exports = companyModel;