/** @format */

import { Router } from 'express';
import orderFormController from '../controllers/orderFormController';
import authMiddleware from '../middleware/authMiddleware';

const orderFormRouter = Router();

orderFormRouter.post('/orderForm', orderFormController.addOrderForm);
orderFormRouter.get(
	'/orderForms',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	orderFormController.getOrderForms
);
orderFormRouter.get(
	'/orderForm',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	orderFormController.getOrderForm
);
orderFormRouter.put(
	'/orderForm',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	orderFormController.updateOrderForm
);
export default orderFormRouter;
