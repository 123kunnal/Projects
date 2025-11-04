const express=require('express')
const Authrouter=express.Router()
const bcrypt=require('bcrypt')
const User=require('./database/mongo')
Authrouter.post('/register',async (req,res)=>{
 try{
const { firstname, lastname, email, password, age } = req.body;
     const USerexist=await User.findOne({email})
     if(USerexist) {
        return res.status(400).send("User already exists")
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

module.exports={
    Authrouter
}