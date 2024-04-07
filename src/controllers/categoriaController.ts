import { Request, Response } from "express";
const Categoria = require("../models/Categoria");

exports.index = async (req: Request, res: Response) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

exports.show = async (req: Request, res: Response) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    res.json(categoria);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

exports.store = async (req: Request, res: Response) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.json(categoria);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req: Request, res: Response) => {
  try {
    const categoria = await Categoria.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(categoria);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

exports.destroy = async (req: Request, res: Response) => {
  try {
    await Categoria.findByIdAndDelete(req.params.id);
    res.json({ message: "Categoria deletada com sucesso" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
