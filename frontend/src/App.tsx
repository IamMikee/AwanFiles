import { useState, useEffect } from "react";
import "./App.css";

// this is temporary
import { io, type Socket } from "socket.io-client";

// this is just a blueprint for the socket code so i can work with it in the backend.

const App = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [roomId, setRoomId] = useState("");

    useEffect(() => {
        // connect client to server
        const socket: Socket = io("http://localhost:3000");

        socket.on("connect", () => {
            console.log(`connected to server as ${socket.id}`);
        });

        socket.on("disconnect", () => {
            console.log("disconnected to server");
        });

        setSocket(socket);
    }, []);

    const createRoom = async (): Promise<void> => {
        try {
            const res: Response = await fetch(
                "http://localhost:3000/send/create-room",
                {
                    method: "GET",
                },
            );
            const data: { roomId: string } = await res.json();
            setRoomId(data.roomId);

            socket?.emit("send-ping", "ping", roomId);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <section>
                <button onClick={createRoom}>Generate QR</button>
            </section>
        </>
    );
};

export default App;
