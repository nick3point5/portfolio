require('../config/database');
const express = require('express');
const router = express.Router();
const Model = require('../models/recipe')

router.get('/', (req,res) => {
    Model.find(
        {},
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);}
            res.render('index.ejs',{aisle:obj})
    })
})

router.get('/new', (req,res) => {
    
    res.render('new.ejs')
})

router.get('/:id/newrecipe', (req,res) => {
    Model.findById(
            req.params.id
        ,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);}
                res.render('show.ejs',{soup:obj})
    })
})


router.post('/:id/newrecipe', (req,res) => {
    const objData ={
        name:  req.body.name,
        ingredients:  +req.body.price,
        soup:  +req.body.qty,
    }
    
    
    Model.findByIdAndUpdate(
            req.params.id
        ,{

        },
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);}
                res.render('show.ejs',{soup:obj})
    })
})

router.get('/:id/edit', (req,res) => {
    Model.findById(
            req.params.id
        ,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);}
                res.render('edit.ejs',{soup:obj})
    })
})

router.post('/', (req,res) => {
    const objData ={
        name:  req.body.name,
        price:  +req.body.price,
        qty:  +req.body.qty,
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
    res.redirect('/index')
})

router.put('/:id', (req,res) => {

    const updateObj = {
        name:  req.body.name,
        price:  +req.body.price,
        qty:  +req.body.qty,
    }
    
    Model.findByIdAndUpdate(
        req.params.id,
        updateObj
        ,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);
            }
            res.redirect('/index')
        }
    )
})

router.delete('/:id', (req,res) => {
    Model.findByIdAndDelete(
        req.params.id,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);
            }
            res.redirect('/index')
        }
    )
})


module.exports = router;