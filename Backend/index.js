const express=require('express')
const app=express()
const database=require('./db')
const struct=require('./db')
app.use(express.json())
app.post('/submit',async (req,res)=>{
    const {title,description,completed}=req.body;
    const result=struct.safeParse({
        title,
        description,
        completed
    })
     
    if(!result.success){
        res.status(404).json(result.error.errors[0].message);
    }
    const entry=await database.create({
        title:title,
        description:description,
        completed:completed
    })
   res.send("Saved to database")
})

app.get('/',async (req,res)=>{
    const space=await database.find();
    res.json({
        space
    })
    
})
app.listen(3000)