/** @format */

import mongoose from 'mongoose';
import { IOrderForm } from '../../common/types/orderForm';



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
				_id: { type: String, required: true },
				count: { type: Number, required: true },
			},
		],
		required: true,
	},
    finished: { type: Boolean, required: true },
    date: {type: String, require:true}
};

const OrderFormSchema = new mongoose.Schema<IOrderForm>(OrderFormType);
const OrderForm = mongoose.model<IOrderForm>('OrderForm', OrderFormSchema);
export default OrderForm;
