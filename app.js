// MODULES
const express = require('express')
const app = express()  // 
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require("./Routers/routers")
const cors=require("cors");

// VARİABLES
const PORT = 5000 || process.env.PORT;

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(bodyParser.json()) // GELEN JSONU PARSE EDİYORUM POSTMAN KULLANIYORUM HENÜZ

app.use("/api",router); 

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