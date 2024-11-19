import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

const connectToMongoDb = async () => {
    try {
        // Check if the URI is defined
        if (!process.env.MONGO_DB_URI) {
            throw new Error("MONGO_DB_URI is not defined in the .env file");
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connection successful");
    } catch (error) {
        console.log("Error occurred:", error.message);
    }
};

export default connectToMongoDb;
