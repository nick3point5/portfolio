const express = require('express')
const router = express.Router()

router.get('/new', (req,res) => {
    res.render('users/new')
})

module.exports = router;