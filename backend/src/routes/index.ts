import { Router } from "express";
// later on import all the routes here

// import type separately
import type { Request, Response } from "express";

const router = Router();

// later use router.use(routes);

router.get("/", (req: Request, res: Response) => {
    res.json({ msg: "server connected" });
});

export default router;
