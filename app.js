
// BAĞIMLILIKLAR

const express = require('express')

const app = express()  // 

const PORT = 5000 || process.env.PORT;

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
        "phone" : "21212121",
        "mobile_phone" : "543 852 4747",
        "email" : "gurkanntuna@gmail.com",
    },])
})
app.listen(PORT,()=>{ // port dinleme
    console.log("5000 portunu dinliyoruz haberin olsun ")
})