/** @format */

import { IClientData, IProduct } from './../models/OrderForm';

/** @format */

import { Request, Response } from 'express';
import OrderForm, { IOrderForm } from '../models/OrderForm';

class orderFormService {
	async getOrderForms(query: {}): Promise<IOrderForm[]> {
		const forms = await OrderForm.find(query);
		return forms;
	}
	async addOrderForm(
		clientData: IClientData,
		products: { id: string; count: number },
		finished: boolean
	): Promise<IOrderForm> {
		const date = new Date();
		// const dateNow: string = date.toLocaleString('ru', {
		// 	year: 'numeric',
        //     month: '2-digit',
		// 	day: '2-digit',
		// 	hour: 'numeric',
		// 	minute: 'numeric',
        //     second: 'numeric',
        //     hour12: false,
            
		// });
		const newOrderForm = await OrderForm.create({
			clientData,
			products,
			finished,
			date,
		});
		return newOrderForm;
	}
	async updateOrderForm(
		id: string,
		orderForm: IOrderForm
	): Promise<IOrderForm | null> {
		const updatedOrderForm = await OrderForm.findByIdAndUpdate(
			id,
			orderForm,
			{ new: true }
		);
		return updatedOrderForm;
	}
}

export default new orderFormService();
