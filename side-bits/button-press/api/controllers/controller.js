const Count = require('../models')

const index = (req,res)=>{ 
  Count.find(
  {},
  (err, obj) => {
    if (err) {
      console.log('Error:');
      console.log(err);}
    res.json(obj)
})
}

const show = (req,res)=>{ 
  Count.findById(
    req.params.id,
    (err, obj) => {
      if (err) {
        console.log('Error:');
        console.log(err);}
      res.json(obj)
})
}

const create = (req,res)=>{
  const objData ={
    title: req.body.title,
    count: req.body.count,
    lastTick: new Date(),
  }
  
  Count.create(
    objData,
    (err, obj) => {
      if (err) {
        console.log('Error:');
        console.log(err);}
      res.json(obj)
  })
}

const update = (req,res)=>{
    const updateObj = {
      title: req.body.title,
      count: req.body.count,
      lastTick: new Date(),
    }
  
    Count.findByIdAndUpdate(
      req.params.id,
      updateObj,
      {new: true},
      (err, obj) => {
        if (err) {
          console.log('Error:');
          console.log(err);
        }
        res.json(obj)
      }
    )

}

const remove = (req,res)=>{
    Count.findByIdAndDelete(
      req.params.id,
      (err, obj) => {
        if (err) {
          console.log('Error:');
          console.log(err);
        }
        res.json(obj)
      })
}

module.exports = {
  index,
  show,
  create,
  update,
  remove
}

