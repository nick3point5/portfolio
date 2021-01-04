"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
require("dotenv").config();
var app = express();
var port = process.env.PORT || 4000;
var path = require('path')

app.use(cors());
app.use(express.json());
var uri = "mongodb+srv://nic3point5:babybabybabybaby@cluster0.5epbs.mongodb.net/petRegistry?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
var connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, function () {
    console.log("Server is running on port: " + port);
});

const Schema = mongoose.Schema
const petSchema = new Schema({
    Petname: {
        type: String,
        required: true,
    },
    belly: {
        type: Number,
        required: true,
    },
    energy: {
        type: Number,
        required: true,
    },
    fun: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

const petStats = mongoose.model('pet', petSchema)

app.get('/db', (req,res) =>{
    // petStats.find({ Petname: 'Karby'})
    // petStats.find({Petname: window.pet.name})
    petStats.find()
        .then(petStatus => res.json(petStatus))
        .catch(err => res.status(400).json('Error: '+ err))

})

app.post('/db',(req, res) => {
    const Petname = ''+req.body.Petname;
    const belly = +req.body.belly;
    const energy = +req.body.energy;
    const fun = +req.body.fun;
    const age = +req.body.age;
    const newPet = new petStats({
         Petname,
         belly,
         energy,
         fun,
         age,
      });
      newPet.save()
      .then(() => res.json("Pet added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  app.post('/db/:id',(req, res) => {
    petStats.findById(req.params.id)
        .then(pet=>{
            pet.Petname= ''+req.body.Petname
            pet.belly= +req.body.belly
            pet.energy= +req.body.energy
            pet.fun= +req.body.fun
            pet.age= +req.body.age

            pet.save()
            .then(() => res.json("pet updated!"))
            .catch((err) => res.status(400).json("Error: " + err));
        })

  });

  app.delete('/db/:id',(req,res) => {
    petStats.findByIdAndDelete(req.params.id)
        .then(() => res.json('Pet deleted'))
        .catch(err => res.status(400).json('Error: '+ err))
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.use(express.static(path.join(__dirname, 'client/build')));
    
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
