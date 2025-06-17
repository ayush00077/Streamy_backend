import {mongoose}from'mongoose'
import {DB_NAME }from'../constants.js'


const connectDB= async()=>{
    try {
      const connectionInstance=  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MONGO_DB CONNECTED ON HOST ${connectionInstance.connection.host}`)
    } catch (error) 
    {
        console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);

        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1);
        
    }

}
export default connectDB