// bağımlılıklar
const express = require('express')
const router = express.Router()
const model = require("../Models/ContactsModel")

router.get('/',(res,req)=>{
   model.find().then(contacts=>{
    res.json(contacts) 
   }).catch(error=>{
   res.json(error)
   }) // all contacts fetch
})
router.get(":/id", (req,res)=>{
    console.log('fetch contact ${req.params.id}') // spesific contact fetch
})

router.post("/test",(req,res)=>{ // route will change 
    const newContact = new model({
        name : req.body.name,
        address : req.body.address,
        phone : req.body.phone,
        email : req.body.email,
        mobile_phone : req.body.mobile_phone
    })
    res.send(req.body)
    console.log(req.body)
    newContact.save()
     res.json(newContact);
 // create method
})

router.delete(":/id",(res,req)=>{
    console.log("delete contact  ${req.params.id} ") // delete method
 })

 router.put(":/id",(res,req)=>{
    console.log("uptade contact  ${req.params.id}") // uptade method
 })

 module.exports = router;
