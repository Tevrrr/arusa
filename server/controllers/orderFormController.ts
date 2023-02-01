
/** @format */


import { Request, Response } from 'express';
import OrderForm from '../models/OrderForm';


class orderFormController {
	async getOrderForms(req: Request, res: Response) {
		try {
			const forms = await OrderForm.find(req.body?.query || {});
			res.status(200).json({ forms });
		} catch (error) {
			console.log(error);
			res.status(400).send('get order forms error');
		}
	}
	async addOrderForm(req: Request, res: Response) {
		try {
			const { ClientData, productIDs } = req.body;
			if (!ClientData || !productIDs) {
				return res
					.status(400)
					.send(
						'You must specify client data and a list of product IDs!'
					);
			}
			const newOrderForm = await OrderForm.create({
				ClientData,
				productIDs,
				finished: false,
			});
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
				return res
					.status(400)
					.send('You must specify the order form!');
            }
			const updateOrderForm = await OrderForm.findByIdAndUpdate(
				orderForm.id,
                orderForm,
                {new:true}
			);
			res.status(200).json(updateOrderForm);
		} catch (error) {
			console.log(error);
			res.status(400).send('put order forms error');
		}
	}
}

export default new orderFormController();