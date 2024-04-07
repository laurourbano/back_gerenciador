//login fazer hash com bcrypt e token com jsonwebtoken
//loginController.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET ?? "123";
const Usuario = require("../models/Usuario");
exports.login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }
    if (!(await bcrypt.compare(password, usuario.password))) {
      return res.status(400).json({ message: "Senha inválida" });
    }
    const token = jwt.sign({ id: usuario._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  }
  catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
