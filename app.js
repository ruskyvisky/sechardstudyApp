// MODULES
const express = require('express')
const app = express()  // 
const mongoose = require("mongoose")

const bodyParser = require("body-parser")
const router = require("./Routers/routers")
// VARİABLES
const PORT = 5000 || process.env.PORT;

app.use(bodyParser.json()) // GELEN JSONU PARSE EDİYORUM POSTMAN KULLANIYORUM HENÜZ

app.use("/contacts",router); 

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