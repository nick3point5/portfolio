require('../config/database');
const express = require('express');
const router = express.Router();
const Model = require('../models/model')

router.get('/', (req,res) => {
    res.render('index.ejs')
})

router.post('/', (req,res) => {
    const objData ={
        property: arg
    }
    
    Model.create(
        objData,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);
            }
        }
    )
})

router.put('/:id', (req,res) => {

    const updateObj = {
        property: newArg
    }

    Model.updateMany(
        {
        property: arg
        },
        updateObj,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);
            }
            process.exit()
        }
    )
})

router.delete('/:id', (req,res) => {
    Model.deleteMany(
        {
        property: arg
        },
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);
            }
            process.exit()
        }
    )
})


module.exports = router;