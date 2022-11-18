const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: {type : String, required : true},
    adress: {type : String, required : true},
    phone: {type : Number, required : true},
    mobile_phone : Number,
    email : String,
})

module.exports = mongoose.model("Contacts",contactSchema)