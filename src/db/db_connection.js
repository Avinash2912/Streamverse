import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from '../constants.js'; 


export async function connectToDatabase() {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`Connected to MongoDB database: DB Host ${connectionInstance}, DB Name: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
        
    }
}
