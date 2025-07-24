import express from'express'
import cors from'cors'
import cookieparser from'cookie-parser'

const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))//this is for json so that express undestand it 
app.use(express.urlencoded({extended:true,limit:"16kb"}))// thus is for url since diffferent brower may encode the url differently 
app.use(express.static("public"));
app.use(cookieparser())//for cookies


export default app