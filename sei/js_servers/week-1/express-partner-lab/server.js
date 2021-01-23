const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const ejs = require('ejs')
const PORT = process.env.PORT || 2000

const list = require('./data.js')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});

app.get('/index', (req,res) => {   
    res.render('index', {things: list})
})

app.get('/index/:id/edit', (req,res) => {
    res.render('edit',{thing:list[req.params.id]})
})

app.delete('/index/:id', (req,res) => {   
    list.splice(req.params.id, 1);

    for (let i = 0; i < list.length; i++) {
        list[i].id=i 
    }
    res.redirect('/index')
})

app.put('/index/:id', (req,res) => {
    const obj = {
        id: +req.params.id,
        name: req.body.name,
        arms: +req.body.arms,
        fingers: +req.body.fingers,
        legs: +req.body.legs,
    }
    list.splice(req.params.id, 1,obj)
    res.redirect('/index')
})