import "dotenv/config";
import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        // origins: the frontend port...
        credentials: true,
    }),
);

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log("listening to port " + PORT);
});

export default app;
