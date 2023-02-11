/** @format */

import mongoose from 'mongoose';

export interface IClientData {
	firstName: string;
	lastName: string;
	address: string;
	phone: string;
}

export interface IProduct {
	id: string;
	count: number;
}

export interface IOrderForm {
	clientData: IClientData;
	products: IProduct[];
	finished: boolean;
}

export const OrderFormType = {
	clientData: {
		type: {
			firstName: { type: String, required: true },
			lastName: { type: String, required: true },
			address: { type: String, required: true },
			phone: { type: String, required: true },
		},
		required: true,
	},
	products: {
		type: [
			{
				id: { type: String, required: true },
				count: { type: Number, required: true },
			},
		],
		required: true,
	},
	finished: { type: Boolean, required: true },
};

const OrderFormSchema = new mongoose.Schema<IOrderForm>(OrderFormType);
const OrderForm = mongoose.model<IOrderForm>('OrderForm', OrderFormSchema);
export default OrderForm;
