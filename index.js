const express = require("express")
const app = express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile("./index.html",{root:__dirname})
})

app.get("/about",(req,res)=>{
    res.sendFile("./about.html",{root:__dirname})
})

app.listen(4000,()=>{
    console.log("the app is listen at -> http://localhost:4000")
})