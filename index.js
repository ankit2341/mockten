const {connection,UserModel,FlightModel,BookingModel}=require("./model/db");
const express=require("express");
// const { json } = require("express");

const app=express();
app.use(express.json());
// app.use(cors({origin:"*"}))

app.get("/",async(req,res)=>{
    try{
         res.status(200).send("welcome to flight booking api")
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.get("/api/flights",async(req,res)=>{
    try{
       const flights=await FlightModel.find();
       res.status(200).send(flights)
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.post("/api/register",async(req,res)=>{
    const data=req.body;

    try{
        const user=new UserModel(data);
        await user.save();
        res.status(201).send({"msg":"user registred"})   
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.post("/api/login",async(req,res)=>{
    const {email,password}=req.body;

    try{
       const user=await UserModel.find({email,password});
       if(user.length>0){
            res.status(201).send({"msg":"user found"})
       }
       else{
        res.status(404).send({"msg":"new user or wrong credentials"})
       }
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.get("/api/flights/:id",async(req,res)=>{
    const id=req.params.id;

    try{
          const flight=await FlightModel.find({_id:id});
          res.status(200).send(flight)
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.post("/api/flights",async(req,res)=>{
    const data=req.body
   
    // console.log(data)
    try{
         const flight=new FlightModel(data);
         console.log(flight)
         await flight.save();

         res.status(201).send({"msg":"saved flight"})
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.patch("/api/flights/:id",async(req,res)=>{
    const id=req.params.id;
    const tobechanged=req.body;
    
    try{
        const flight=await FlightModel.findByIdAndUpdate({_id:id},tobechanged);
        res.status(204).send({"msg":"updated flight","flight":flight})
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.delete("/api/flights/:id",async(req,res)=>{
    const id=req.params.id;
    try{
       await FlightModel.findByIdAndDelete({_id:id});
       res.status(202).send({"msg":"flight deleted"})
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.post("/api/booking",async(req,res)=>{
    const data=req.body;
   console.log(data)
    try{
         const booking=new BookingModel(data);
         await booking.save();
         res.status(201).send({"msg":"booking added"})  
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.get("/api/dashboard",async(req,res)=>{
    try{
        const bookings=await BookingModel.find();
        res.status(200).send(bookings)
    }
    catch(err){
        res.status(404).send({"msg":"Error 404 not found"})
    }
})

app.listen(4500,async()=>{
    try{
       await connection;
       console.log("connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log("running at 4500")
})

