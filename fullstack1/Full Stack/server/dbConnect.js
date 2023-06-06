const mongoose = require("mongoocse")
const express = require("express")
const app = express()
const port = 1100

const CONNECTION_URL =  "mongodb+srv://seshukothapalli302:seshu123@cluster0.ghfp63j.mongodb.net/posts?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(port),()=>console.log("MONGO CONNNECTED and server running in 1100")).catch(()=>{})