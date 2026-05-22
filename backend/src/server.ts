import "dotenv/config";
import express, { type Application } from "express";
import routes from "./routes/index.js";
import { Server, type Socket } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;

// temporary client url
const clientUrl: string = process.env.CLIENT_URL || "http://localhost:5173";

// bypassing cors restriction
app.use(
    cors({
        origin: clientUrl,
        credentials: true,
    }),
);

app.use(express.json());
app.use(routes);

const httpServer = createServer(app);

// initializing socket server
const io = new Server(httpServer, {
    cors: {
        origin: clientUrl,
        credentials: true,
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("send-ping", (msg: string, roomId: string) => {
        console.log(msg);
    });
});

httpServer.listen(PORT, (): void => {
    console.log("listening to port " + PORT);
});

export { io };
export default app;
