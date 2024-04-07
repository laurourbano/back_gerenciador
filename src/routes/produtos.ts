import { Router } from "express";

const produtosRouter = Router();

produtosRouter.get("/", (req, res) => {
  return res.json({ message: "produtos" });
});

export default produtosRouter;
