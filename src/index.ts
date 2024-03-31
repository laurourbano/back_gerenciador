import dotenv from "dotenv";
dotenv.config();
import express from "express";
import routes from "./routes/routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({
    "rota principal": "http://localhost:3333",
    "rota de autenticação": "http://localhost:3333/api/login",
    "rota de usuários": "http://localhost:3333/api/usuarios",
    "rota de produtos": "http://localhost:3333/api/produtos",
    "rota de categorias": "http://localhost:3333/api/categorias",
    "rota de pedidos": "http://localhost:3333/api/pedidos",
  });
});

app.listen(port, () => {
  console.log(`🔥 Server is running at http://localhost:${port}`);
});
