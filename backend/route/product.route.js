import express from "express";
import Product from "../models/product.model.js";
import {
  deleteProduct,
  updatedProduct,
  createProduct,
  getProduct,
} from "../controller/product.controller.js";
const router = express.Router();

router.get("/", getProduct);

router.put("/:id", updatedProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

export default router;
