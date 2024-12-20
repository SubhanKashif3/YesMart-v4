import dotenv from "dotenv";

// Load environment variables before any other imports
dotenv.config({
    path : "./.env"
});

import { connectToDatabase } from "./database/connectToDatabase";
import { app } from "./app/app";
import { PORT } from "./constants/envConstants";

// Connect to database and start server
connectToDatabase().then(()=>{
    app.listen(PORT,()=>console.log("App running on PORT",PORT));
}).catch((error) => {
    console.error("Failed to start the server:", error);
    process.exit(1);
});