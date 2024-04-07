import { Router } from "express";

const usuariosRouter = Router();

usuariosRouter.get("/", (req, res) => {
  return res.json({ message: "usuarios" });
});

export default usuariosRouter;
