import { Router } from "express";

const pedidosRouter = Router();

pedidosRouter.get("/", (req, res) => {
  return res.json({ message: "pedidos" });
});

export default pedidosRouter;
