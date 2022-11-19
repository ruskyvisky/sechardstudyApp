const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: {type: String, required : true},
    address: {type: String, required : true},
    phone: {type: Number, required : true},
    mobile_phone: Number,
    email : String,
},
{
    versionKey: false 
}
)

module.exports = mongoose.model("Contacts",contactSchema)