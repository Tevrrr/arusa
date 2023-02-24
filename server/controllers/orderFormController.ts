/** @format */

import { Request, Response } from 'express';
import orderFormService from '../services/orderFormService';

class orderFormController {
	async getOrderForms(req: Request, res: Response) {
		try {
            const { finished, skip, limit } = req.query;
			const { forms, errorMessage, countForms } =
				await orderFormService.getOrderForms(
					finished ? finished === 'true' : undefined,
					Number.parseInt(skip?.toString() || '0'),
					Number.parseInt(limit?.toString() || '0')
				);
			if (errorMessage) {
				res.status(400).json({ message:errorMessage });
			}
			res.status(200).json({ forms, countForms });
		} catch (error) {
			console.log(error);
			res.status(400).send('get order forms error');
		}
	}
	async getOrderForm(req: Request, res: Response) {
		try {
			const { id } = req.query;
			const { form, errorMessage } =
				await orderFormService.getOrderForm(
					id?.toString() || ''
				);
			if (errorMessage) {
				res.status(400).json({ message: errorMessage });
			}
			console.log(form);
			res.status(200).json(form);
		} catch (error) {
			console.log(error);
			res.status(400).send('get order forms error');
		}
	}
	async addOrderForm(req: Request, res: Response) {
		try {
			const { clientData, products } = req.body;
			if (!clientData || !products) {
				return res
					.status(400)
					.send(
						'You must specify client data and a list of product IDs!'
					);
			}
			const { form: newOrderForm, errorMessage } =
				await orderFormService.addOrderForm(
					clientData,
					products,
					false
				);
			if (errorMessage) {
				res.status(400).json({ message: errorMessage });
			}
			res.status(200).json(newOrderForm);
		} catch (error) {
			console.log(error);
			res.status(400).send('add order forms error');
		}
	}
	async updateOrderForm(req: Request, res: Response) {
		try {
			const { orderForm } = req.body;
			if (!orderForm) {
				return res.status(400).send('You must specify the order form!');
			}
			const { form, errorMessage } =
				await orderFormService.updateOrderForm(orderForm._id, orderForm);
			if (errorMessage) {
				return res.status(400).send(errorMessage);
			}
			res.status(200).json(form);
		} catch (error) {
			console.log(error);
			res.status(400).send('put order forms error');
		}
	}
}

export default new orderFormController();
