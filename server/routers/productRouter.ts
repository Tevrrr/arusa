import { Router } from "express";
import productController from "../controllers/productController";
import authMiddleware from '../middleware/authMiddleware';

const productRouter = Router();

productRouter.post('/product', authMiddleware(['ADMIN']), productController.addProduct);
productRouter.get('/product', productController.getProduct);

export default productRouter;




