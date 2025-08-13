import { Request, Response } from "express";

class OnboardingController {
  public signUp(req: Request, res: Response): void {
    try {
      res.send("Hello World");
    } catch (error) {
      console.error("Error in signUp:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default new OnboardingController();
