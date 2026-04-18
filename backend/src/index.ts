import app from "./server.js";
import dotenv from "dotenv";

// load .env file
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
});
