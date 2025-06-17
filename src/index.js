//import {mongoose } from 'mongoose'
// import{constants } from'./constants.js'
import connectDB from'./db/index.js'

import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})

connectDB()
