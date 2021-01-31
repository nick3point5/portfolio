const mongoose = require('mongoose')
const Schema = mongoose.Schema
const project = new Schema ({
    title:  {
        type: String,
        required: true
    },
    subtitle:  {
        type: String,
        required: true
    },
    about:  {
        type: String,
    },
    team:  
        [{type: String}]
    ,
    duration:  {
        type: String,
        required: true
    },
    roles:  {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('project', project)