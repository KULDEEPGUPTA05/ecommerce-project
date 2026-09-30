const express=require("express");
const app=express();

const cors=require("cors");
app.use(cors())
app.use(express.json())
const {product_route}=require("./routes/productrout.js");
app.use("/Product",product_route)
app.get("/",(req,res)=>{
    res.send("hello i am get")
})
app.listen(3000,()=>{
    console.log("server started .........")
})