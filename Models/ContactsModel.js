
const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema(
   
    {
    
    name: {type: String, required : true, unique: true, },
    address: {type: String, required : true },
    phone: {type: Number, required : true ,unique: true,},
    mobile_phone: Number,
    email : String,
},

)

contactSchema.method("toJSON", function() { //  ID converting JSON Data
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  })

module.exports = mongoose.model("Contacts",contactSchema)