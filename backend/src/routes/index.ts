import { Router, type Request, type Response } from "express";
// later on import all the routes here

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ msg: "server connected" });
});

export default router;
