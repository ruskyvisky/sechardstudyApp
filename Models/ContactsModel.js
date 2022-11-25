
const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');

const contactSchema = new mongoose.Schema(
   
    {
    
    name: {
    type: String, 
    required : true,
    lowercase: true,
    unique: [true, 'That contact name  is  already taken.']  
  },
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
contactSchema.plugin(uniqueValidator,{message: "Aynı isim veya Telefon numarasına sahip kullanıcı var!"})

  // contactSchema.post('save', function(error, doc, next) {
  //   if (error.name === 'MongoServerError' && error.code === 11000) {
      
  //     next(new Error('There was a duplicate key error'));
      
  //   } else {
  //     next();
  //   }
  // });
  
module.exports = mongoose.model("Contacts",contactSchema)