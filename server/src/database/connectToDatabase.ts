import mongoose from "mongoose";
import { DATABASE_URL } from "../constants/envConstants";

const connectToDatabase = async () => {
    try {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
            throw new Error("DATABASE_URL environment variable is not defined!");
        }
        console.log("Attempting to connect to MongoDB...");
        
        const connectionInstance = await mongoose.connect(dbUrl);
        console.log(`\nMongoDB Connected Successfully! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("\nMONGODB CONNECTION ERROR:");
        console.error(error);
        process.exit(1);
    }
};

export {connectToDatabase}