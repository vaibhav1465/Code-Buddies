import express from "express";
import onboardingRoutes  from "./src/modules/onboarding";


// Setup Data Base
// Setup Server
const app = express();

// Default route
app.get("/", (req, res) => {
  res.send("Hello World KK ll");
});

// Use onboarding routes under /onboarding
app.use("/onboarding", onboardingRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;