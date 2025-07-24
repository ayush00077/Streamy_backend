//import {mongoose } from 'mongoose'
// import{constants } from'./constants.js'
import connectDB from'./db/index.js'
import app from './app.js'

import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})

connectDB()//since the fn is async so it return a promise so thats why this 
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server us running at port:${process.env.PORT}`)
    })

})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED",err)
})
