import express from "express";
// import type separately
import type { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "server connected" });
});

export default app;
