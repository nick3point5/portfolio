require('../config/database');
const express = require('express');
const router = express.Router();
const Soup = require('../models/soup')
const Recipe = require('../models/recipe')


router.get('/', (req,res) => {
    Soup.find(
        {},
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);}
            res.render('soup/index.ejs',{aisle:obj})
    })
})

router.get('/new', (req,res) => {
    
    res.render('soup/new.ejs')
})

router.get('/:id', (req,res) => {
    Soup.findById(
            req.params.id
        ,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);}
                res.render('soup/show.ejs',{soup:obj})
    })
})

router.get('/:id/newrecipe', (req,res) => {

    Soup.findById(
            req.params.id
        ,{

        },
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);}
            
            res.render('recipe/new.ejs',{soup:obj})
    })
})

router.post('/:id', (req,res) => {

    Soup.findById(
        req.params.id,
        (err,soup)=>{

            // Recipe.create(
            //     {
            //         name:  req.body.name,
            //         ingredients:  req.body.ingredients,
            //         soup: soup._id
            //     },(err, recipe) => {
            //         if (err) {
            //             console.log('Error:');
            //             console.log(err);}



            //             // Soup.findByIdAndUpdate(
            //             //     req.params.id,
            //             //     {
            //             //         $push: {recipe: recipe._id}
            //             //     },
            //             //     { new: true },
            //             //     (err,obj)=>{
            //             //         res.redirect('/index')
            //             //     }
            //             // )

            //     }
            // )

            

        })
    

})



router.get('/:id/edit', (req,res) => {
    Soup.findById(
            req.params.id
        ,
        (err, obj) => {
            if (err) {
                console.log('Error:');
                console.log(err);}
                res.render('soup/edit.ejs',{soup:obj})
    })
})

router.post('/', (req,res) => {
    const objData ={
        name:  req.body.name,
        price:  +req.body.price,
        qty:  +req.body.qty,
    }
    
    Soup.create(
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
    
    Soup.findByIdAndUpdate(
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
    Soup.findByIdAndDelete(
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