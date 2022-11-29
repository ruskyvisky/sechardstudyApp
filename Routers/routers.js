// MODULES
const express = require("express");
const router = express.Router();
const model = require("../Models/ContactsModel");

router.get("/", (req, res) => {   // all contacts fetch
  model
    .find()
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      res.json(err);
    }); 
});
router.get("/:id", (req, res) => { // spesific contact fetch
  model
    .findById(req.params.id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      res.json(err);
    }); 
});

router.post("/createuser", async (req, res, next) => { // create method
  try {
    const newContact = await new model({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      mobile_phone: req.body.mobile_phone,
    });

    newContact
      .save()
      .then((responsee) => {
        res.status(201).json(responsee);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
  
});

router.delete("/:id", (req, res) => {  // delete method
  model
    .findByIdAndDelete(req.params.id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      res.json(err);
    }); 
});

router.put("/:id", (req, res) => {  
  // uptade method
  model
    .findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      mobile_phone: req.body.mobile_phone,
      email: req.body.email,
    })
    .then((contact) => {
      res.status(202).json(contact);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
