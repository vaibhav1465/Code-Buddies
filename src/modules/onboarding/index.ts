import { Router, Request, Response } from "express";
import { OnboardingController } from './controller';

const router = Router();

router.get("/user", (req: Request, res: Response) => {
    OnboardingController.signUp(req, res);
});

export default router; 
