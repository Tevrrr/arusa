/** @format */

import { Router } from 'express';
import productPageController from '../controllers/productPageController';
import authMiddleware from '../middleware/authMiddleware';

const productPageRouter = Router();

productPageRouter.post(
	'/productPage',
	authMiddleware(['ADMIN']),
	productPageController.addProductPage
);
productPageRouter.put(
	'/productPage',
	authMiddleware(['ADMIN']),
	productPageController.updateProductPage
);

productPageRouter.get('/productPage', productPageController.getProductPage);
productPageRouter.get('/products', productPageController.getProducts);

export default productPageRouter;