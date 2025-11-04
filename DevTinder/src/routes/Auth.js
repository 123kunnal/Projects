const express=require('express')
const Authrouter=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const validator=require('validator')
const User=require('./database/mongo')
Authrouter.post('/register',async (req,res)=>{
 try{
const { firstname, lastname, email, password, age } = req.body;
     const USerexist=await User.findOne({email})
     if(USerexist) {
        return res.status(400).send("User already exists")
     }
     if (!validator.isStrongPassword(password)) {
         return res.status(400).send("Password not strong enough");
     }
    const hashedPassword=await bcrypt.hash(Password,10);
      const newUser=new User({
          firstname,
          lastname,
          password:hashedPassword,
          email,
          age
      })
  
      await newUser.save();
      res.send("data saved successfully")
    }
      catch (err) {
    console.log(err);
    res.status(500).send("Server error ❌");
  }
})

Authrouter.post('/login',async (req,res)=>{
   const {email,password}=req.body;
   const Userexist=await User.findOne({email});
   if(!Userexist){
    return res.status(201).send("User not found")
   }
   // check if entered password is correct
   const Verifypassword=Userexist.encrypt()
   if (!Verifypassword) {
      return res.status(401).send("Invalid credentials");
    }

    //generate token
    const token=Userexist.getJWT()
    res.cookie("token",token);
    res.send("User verified successfully")
})

Authrouter.post('/logout',(req,res)=>{
  res.cookie("token",null,{
    expires:new Date(Date.now())
  })
  res.send("Logged out")
})
module.exports={
    Authrouter
}