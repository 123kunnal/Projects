const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://testuser:namastenode@cluster0.cnp4x.mongodb.net/Paytm')
  .then(() => {
    console.log("✅ Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("❌ Something went wrong:", err);
  });

  const userSchema=new mongoose.Schema({
    username:{
        type:String,
        maxLength:60,
        required:true,
        trim:true,
        unique:true,
        minLength:3
    },
    password:{
        type:String,
        minLength:6,
        required:true
    },
    firstname:{
        type:String,
        maxLength:60,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        maxLength:60,
        required:true,
        trim:true
    },
  })

const User=mongoose.model("User",userSchema);
module.exports={
    User
}