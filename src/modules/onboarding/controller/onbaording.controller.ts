import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
    res.send("Hello World");
});

export default router;