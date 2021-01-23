const express = require('express')
const app = express()

app.get('/about', (req,res) => {

    res.send('/about route was hit');
    
})
app.get('/project', (req,res) => {

    res.send('Here are all my projects');
    
})
app.get('/products', (req,res) => {

    res.send('These are all my products');
    
})


app.get('/products/:productName', (req,res) => {
    res.send(`Buy this ${req.params.productName}`);
    
})

app.get('/products/:productName/:color/:num', (req,res) => {
    
    res.send(`Buy ${req.params.num} ${req.params.color} ${req.params.productName}`);
    
    
})

app.get('/add/:fst/:sec', (req,res) => {
    
    res.send((+req.params.fst + +req.params.sec)+'');
    
    
})

app.listen(4000, () => {
    console.log('Your Server is running on port 4000');
})

