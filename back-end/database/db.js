import mongoose from "mongoose";

const connecToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dilan:dilan@cluster0.3yjectp.mongodb.net/noteApp");
        console.log("Connect to MongoDB");
        
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
        
    }
}

export default connecToMongoDB;