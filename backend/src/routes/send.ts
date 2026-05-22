import { Router, type Request, type Response } from "express";

const router = Router();

// create room for sharing files
router.get("/send/create-room", (req: Request, res: Response) => {
    // create random ID for a room
    const roomId: string = crypto.randomUUID();

    return res.json({ roomId });
});

export default router;
