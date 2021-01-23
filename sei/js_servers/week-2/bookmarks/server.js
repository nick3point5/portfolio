const express = require('express')
const ejs = require('ejs')
const controller = require('./controllers/users-controller')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
const PORT = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.render('index')
})

app.use('/users', controller)

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});