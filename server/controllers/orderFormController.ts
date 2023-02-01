
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
            const { clientData, products } = req.body;
            console.log(req.body);
			if (!clientData || !products) {
				return res
					.status(400)
					.send(
						'You must specify client data and a list of product IDs!'
					);
			}
			const newOrderForm = await OrderForm.create({
				clientData,
				products,
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
			const updatedOrderForm = await OrderForm.findByIdAndUpdate(
				orderForm.id,
                orderForm,
                {new:true}
			);
			res.status(200).json(updatedOrderForm);
		} catch (error) {
			console.log(error);
			res.status(400).send('put order forms error');
		}
	}
}

export default new orderFormController();