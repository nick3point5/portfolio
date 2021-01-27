const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProjectSchema = new Schema ({
    Title:  {
        type: String,
        required: true
    },
    Description:  {
        type: String,
        required: true
    },
    Date:  {
        type: Date,
        required: true
    },
    git:  {
        type: String,
        required: true
    },
    deploy:  {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('project', ProjectSchema)