import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connecToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connect to MongoDB");
        
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
        
    }
}

export default connecToMongoDB;