import { Router } from "express";
import productController from "../controllers/productController";

const productRouter = Router();

productRouter.post('/product', productController.addProduct);
productRouter.get('/product', productController.getProduct);

export default productRouter;




