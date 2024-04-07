import { Router } from "express";

const loginRouter = Router();

loginRouter.get("/", (req, res) => {
  return res.json({ message: "login" });
});

export default loginRouter;