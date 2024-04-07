import { Router } from "express";

const categoriasRouter = Router();

categoriasRouter.get("/", (req, res) => {
  return res.json({ message: "categorias" });
});

export default categoriasRouter;
