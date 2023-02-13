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
		products: {id:string, count:number},
		finished: boolean
	): Promise<IOrderForm> {
		const newOrderForm = await OrderForm.create({
			clientData,
			products,
			finished,
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