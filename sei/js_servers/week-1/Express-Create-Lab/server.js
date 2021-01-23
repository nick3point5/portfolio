const express = require('express');
const app = express();
const ejs = require('ejs')

const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

// db
const products = require('./products');

// product index route
app.get('/products', (req, res) => {
  res.render('main',{products:products})
});

// product show route
app.get('/products/:id', (req, res) => {
  res.send(products[req.params.id]);
});

// product create route
app.post('/products', (req, res) => {
  // console.log('CREATE route accessed');
  // console.log('Data within req.body: ', req.body);
  // products.push(req.body);
  const newProduct={
    name: req.body.name, 
    price: req.body.price, 
    img: req.body.url
  }
  products.push(newProduct);
  res.redirect('/products');
});


// app.get('/main', (req,res) => {
//   res.render('main',{products:products})
// })

app.listen(PORT, () => {
  console.log("App is running on port: ", PORT);
});


