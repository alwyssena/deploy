const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello!")
})
app.listen(3000,()=>{
    console.log("hello world")
})