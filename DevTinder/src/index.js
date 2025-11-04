const express=require('express')
const app=express()

const {Authrouter}=require('./routes/Auth')
app.use(express.json())

app.use('/',Authrouter)

app.listen(3000)
