// bağımlılıklar
const express = require('express')
const router = express.Router()
const model = require("../Models/ContactsModel");

router.get('/',(req,res)=>{
    
    model.find()
    .then((contact) => {
      res.json(contact);
      
    })
    .catch((err) => {
      res.json(err);
    }); // all contacts fetch
})
router.get("/:id", (req,res)=>{
  model.findById(req.params.id)
  .then((contact) => {
    res.json(contact);
  })
  .catch((err) => {
    res.json(err);
  });// spesific contact fetch
})

router.post("/createuser", async (req,res,next)=>{  
   

try {
  const newContact = await new model({
    name : req.body.name,
    address : req.body.address,
    phone : req.body.phone,
    email : req.body.email,
    mobile_phone : req.body.mobile_phone
})
res.send(req.body)
newContact.save()
res.json(newContact);
res.redirect('/')
} catch (error) {
 console.log(error)
}
 // create method
})



router.delete("/:id",(req,res)=>{
    
    model.findByIdAndDelete(req.params.id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      res.json(err);
    }); // delete method
 })

 router.put("/:id",(req,res)=>{
 
    model.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        address : req.body.address,
        phone : req.body.phone,
        mobile_phone : req.body.mobile_phone,
        email : req.body.email
       
      })
        .then((contact) => {
          res.json(contact);
        })
        .catch((err) => {
          res.json(err);
        });
 // uptade method
 })

 

 module.exports = router;
