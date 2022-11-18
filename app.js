// BAĞIMLILIKLAR
const express = require('express')
const app = express()  // 

const PORT = 5000 || process.env.PORT;
const mongoose = require("mongoose")
// GET METHOD
app.get('/api/contacts',(req,res,next)=>{
    res.json([{ // JSON BAĞLANTISI ileride db gelecek
        "id" : 1,
        "name" : "Numan Dirican",
        "address" : "test address",
        "phone" : "212144545",
        "mobile_phone" : "543 783 5980",
        "email" : "testmail@gmail.com",
    },
    {
        "id" : 2,
        "name" : "Cihat Altuntaş",
        "address" : "test",
        "phone" : "2121477",
        "mobile_phone" : "549 885 5207",
        "email" : "chtaltn5s@gmail.com",
    },
    {
        "id" : 3,
        "name" : "Gürkan Tuna",
        "address" : "test address",
        "phone" : "212121521",
        "mobile_phone" : "543 852 4747",
        "email" : "gurkanntuna@gmail.com",
    },])
}),


mongoose.connect("mongodb+srv://ruskyvisky:numan123@phonecluster.jlgueqe.mongodb.net/?retryWrites=true&w=majority",
(e) => {
    if(e){
        console.log(e);
    }
    else{
        console.log("Connected.")
    }
}
)


app.listen(PORT,()=>{ // port dinleme
    console.log("5000 portunu dinliyoruz haberin olsun ")
})