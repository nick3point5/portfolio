const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('get ice cream')
})

router.get('/:id', (req,res) => {
    res.send('get 1 ice cream')
})


module.exports = router