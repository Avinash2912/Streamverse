import dotenv from "dotenv";
import { connectToDatabase } from "../src/db/db_connection.js";
import { app } from "../src/app.js";


dotenv.config();

connectToDatabase().then(() => {
    app.on("error", (error) => {
    console.error("Error connecting to the MONGODB:", error);
    process.exit(1);
});
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });

    app.on("error", (error) => {
        console.error("Error in the Express app:", error);
        process.exit(1);
    });


    
}).catch((error) => {
    console.error("Error connecting to the MONGODB:", error);
    process.exit(1);
});


