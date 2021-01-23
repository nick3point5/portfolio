const express = require('express');
const router = express.Router();
const db = require('../config/database')

router.get('/', (req,res) => {
    res.render('index.ejs')
})

router.post('/', (req,res) => {
    const objData ={
        property: arg
    }
    
    db.Model.create(
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

    db.Model.findByIdAndUpdate(
        req.body.id,
        updateObj,
        {new: true},
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);
            }
        }
    )
})

router.delete('/:id', (req,res) => {
    db.Model.findByIdAndDelete(
        req.body.id,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);
            }
        }
    )
})


module.exports = router;