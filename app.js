const express = require('express')

const app = express()

const PORT = 5000 || process.env.PORT;


app.get('/api/contacts',(req,res,next)=>{
    res.json([{
        "id" : 1,
        "name" : "Numan Dirican",
        "address" : "test address"
        "phone" : "null"
        "mobile_phone" : "543 783 5980"
        "email" : "testmail@gmail.com"
    },
    {
        "id" : 2,
        "name" : "Cihat Altuntaş",
        "address" : ""
        "phone" : "null"
        "mobile_phone" : "549 885 5207"
        "email" : "chtaltns@gmail.com"
    },
    {
        "id" : 3,
        "name" : "Gürkan Tuna",
        "address" : "test address"
        "phone" : "null"
        "mobile_phone" : "543 852 5980"
        "email" : "gurkanntuna@gmail.com"
    },])
})
app.listen(PORT,()=>{
    console.log("5000 portunu dinliyoruz haberin olsun ")
})