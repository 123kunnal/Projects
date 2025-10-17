const express=require('express');
const app=express()
const MainRouter=require('./router/route')
app.use("/api/vi",MainRouter)