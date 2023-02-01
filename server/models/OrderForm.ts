/** @format */

import mongoose from 'mongoose';

export const OrderFormType = {
	ClientData: {
		type: {
			firstName: { type: String, required: true },
			lastName: { type: String, required: true },
			address: { type: String, required: true },
			phone: { type: String, required: true },
		},
		required: true,
	},
	productIDs: { type: [String], required: true },
	finished: { type: Boolean, required: true },
};

const OrderFormSchema = new mongoose.Schema(OrderFormType);
const OrderForm = mongoose.model('OrderForm', OrderFormSchema);
export default OrderForm;
