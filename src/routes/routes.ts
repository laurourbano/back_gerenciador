import { Router } from "express";
import loginRouter from "./login";
import produtosRouter from "./produtos";
import usuariosRouter from "./usuarios";
import categoriasRouter from "./categorias";
import pedidosRouter from "./pedidos";

const routes = Router();

routes.use("/login", loginRouter);

routes.use("/usuarios", usuariosRouter);

routes.use("/produtos", produtosRouter);

routes.use("/categorias", categoriasRouter);

routes.use("/pedidos", pedidosRouter);

export default routes;
