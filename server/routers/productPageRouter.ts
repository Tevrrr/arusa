/** @format */

import { Router } from 'express';
import productPageController from '../controllers/productPageController';
import authMiddleware from '../middleware/authMiddleware';

const productPageRouter = Router();

productPageRouter.post(
	'/productPage',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	productPageController.addProductPage
);
productPageRouter.put(
	'/productPage',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	productPageController.updateProductPage
);
productPageRouter.delete(
	'/productPage',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	productPageController.deleteProductPage
);

productPageRouter.get('/productPage', productPageController.getProductPage);
productPageRouter.get('/products', productPageController.getProducts);
productPageRouter.get('/productsBag', productPageController.getProductsBag);
productPageRouter.get('/productsByIDs', productPageController.getProductsByIDs);

export default productPageRouter;
