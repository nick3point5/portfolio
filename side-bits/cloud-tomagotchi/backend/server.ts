import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const router = require("express").Router();


require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://nic3point5:babybabybabybaby@cluster0.5epbs.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });


// const Schema = mongoose.Schema

// const petSchema = new Schema({
//     Petname: {
//         type: String,
//         required: true,
//     },
//     belly: {
//         type: Number,
//         required: true,
//     },
//     energy: {
//         type: Number,
//         required: true,
//     },
//     fun: {
//         type: Number,
//         required: true,
//     },
//     age: {
//         type: Number,
//         required: true,
//     }
// }, {
//     timestamps: true,
// })

// const petStats = mongoose.model('pet', petSchema)

// router.route("/add").post((req, res) => {
//     const Petname = ''+req.body.Petname;
//     const belly = +req.body.belly;
//     const duration = +req.body.duration;
//     const fun = +req.body.fun;
//     const age = +req.body.age;
  
//     const newPet = new petStats({
//          Petname,
//          belly,
//          duration,
//          fun,
//          age, 
//       });
  
//       newPet.save()
//       .then(() => res.json("Pet added!"))
//       .catch((err) => res.status(400).json("Error: " + err));
//   });

// router.route('/update/:id').post((req,res) => {
//     petStats.findById(req.params.id)
//         .then(pet => {
//             pet.Petname = ''+req.body.Petname;
//             pet.belly = +req.body.belly;
//             pet.duration = +req.body.duration;
//             pet.fun = +req.body.fun;
//             pet.age = +req.body.age;

//             pet.save()
//                 .then(() => res.json("Pet updated!"))
//                 .catch((err) => res.status(400).json("Error: " + err));
//         })
//         .catch(err => res.status(400).json('Error: '+ err))
// })