/** @format */

import mongoose from 'mongoose';

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

const OrderFormSchema = new mongoose.Schema(OrderFormType);
const OrderForm = mongoose.model('OrderForm', OrderFormSchema);
export default OrderForm;
