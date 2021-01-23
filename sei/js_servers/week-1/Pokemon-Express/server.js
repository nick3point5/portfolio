const express = require("express")
const ejs = require("ejs")
const pokemonEx = require('./pokemon')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const methodOverride = require('method-override');
const PORT = 3001



app.use(bodyParser.urlencoded({ extended: false }));
app.use('/pokemon',express.static(__dirname+'/public'))
app.use(methodOverride('_method'));

app.set('view engine', 'ejs')

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});

app.get('/pokemon', (req,res) => {
    res.render("index", {pokemon: pokemonEx})
    // res.send(pokemon)
}) 

app.get('/pokemon/:id', (req,res) => {
    res.render("show", {pokemon:pokemonEx[req.params.id]})
})

app.get('/catch', (req,res) => {
    res.render("new")
})

app.post('/catch', (req,res) => {
    const newPoke = {
        name: req.body.name,
        img: req.body.url,
    }
    pokemonEx.push(newPoke)
    res.redirect('/pokemon')
})

app.delete('/pokemon/:id', (req,res) => {
    pokemonEx.splice(req.params.id,1)
    res.redirect('/pokemon')
})

app.put('/pokemon/:id', (req,res) => {
    const newPoke = {
        name: req.body.name,
        img: req.body.url,
    }
    pokemonEx.splice(req.params.id,1,newPoke)
    console.log(req);
    
    res.redirect('/pokemon')
})

app.get('/pokemon/:id/edit', (req,res) => {
    res.render("edit", {pokemon:pokemonEx[req.params.id],id:req.params.id})
})