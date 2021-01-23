const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recipeModel = new Schema ({
    name:  {
        type: String,
        required: true
    },
    ingredients:  [{
        type: String,
    }],
    soup: {
        type: Schema.Types.ObjectId,
        ref: 'soup'
    },
})

module.exports = mongoose.model('recipe', recipeModel)
// const model = mongoose.model('recipe', recipeModel)

// model.find(
//     {},
//     (err,obj)=>{
//         console.log(obj);
        
//     }
// )