/** @format */

import { Router } from 'express';
import orderFormController from '../controllers/orderFormController';
import authMiddleware from '../middleware/authMiddleware';

const orderFormRouter = Router();

orderFormRouter.post('/orderForm', orderFormController.addOrderForm);
orderFormRouter.get(
	'/orderForms',
	authMiddleware(['ADMIN']),
	orderFormController.getOrderForms
);
orderFormRouter.put(
	'/orderForms',
	authMiddleware(['ADMIN']),
	orderFormController.updateOrderForm
);
export default orderFormRouter;
