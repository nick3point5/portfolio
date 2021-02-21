const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3001
const routes = require('./routes')

app.use(bodyParser.json())
app.use(cors())

app.use('/',routes.main)

app.listen(PORT, ()=>{
console.log(
  `Server running in port ${PORT} \nlocal: http://192.168.56.1:${PORT}`
);
})