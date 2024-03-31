import { Router } from "express";

const routes = Router();

routes.get("/login", (req, res) => {
  return res.json({ message: "auth" });
});

routes.get("/usuarios", (req, res) => {
  return res.json({ message: "usuários" });
});

routes.get("/produtos", (req, res) => {
  return res.json({ message: "produtos" });
});

routes.get("/categorias", (req, res) => {
  return res.json({ message: "categorias" });
});

routes.get("/pedidos", (req, res) => {
  return res.json({ message: "pedidos" });
});

export default routes;
