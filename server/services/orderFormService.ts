/** @format */

import { IClientData } from '../../common/types/clientData';
import { IOrderForm } from '../../common/types/orderForm';
import OrderForm from '../models/OrderForm';
import ProductPage from '../models/ProductPage';

interface IOrderFormResult {
	forms?: IOrderForm[];
	form?: IOrderForm;
	countForms?: number;
	errorMessage?: string;
}

class orderFormService {
	async getOrderForms(
		finished: boolean = false,
		skip: number = 0,
		limit: number = 0
	): Promise<IOrderFormResult> {
		try {
			const forms = await OrderForm.find({ finished })
				.skip(skip)
				.limit(limit)
				.sort({ date: 1 });
			const countForms = await OrderForm.find({
				finished,
			}).countDocuments();
			return { forms, countForms };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Get order forms error' };
		}
	}
	async getOrderForm(id: string): Promise<IOrderFormResult> {
		try {
			const form = await OrderForm.findById(id);
			if (!form) {
				return { errorMessage: 'Order form not found!' };
			}
			return { form };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Get order forms error' };
		}
	}

	async addOrderForm(
		clientData: IClientData,
		products: { id: string; count: number },
		finished: boolean
	): Promise<IOrderFormResult> {
		try {
			const date = new Date();
			const dateNow: string = date.toLocaleString('ru', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: false,
			});
			const newOrderForm = await OrderForm.create({
				clientData,
				products,
				finished,
				date: dateNow,
			});
			newOrderForm.products.forEach(async (item) => {
				const productPage = await ProductPage.findById(item.id);
				if (!productPage) return;
				await ProductPage.findByIdAndUpdate(
					productPage._id,
					{
						sellability: productPage.sellability + 1,
					},
					{ new: true }
				);

			});
			return { form: newOrderForm };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Get order forms error' };
		}
	}
	async updateOrderForm(
		id: string,
		orderForm: IOrderForm
	): Promise<IOrderFormResult> {
		try {
			const updatedOrderForm = await OrderForm.findByIdAndUpdate(
				id,
				orderForm,
				{ new: true }
			);
			if (!updatedOrderForm) {
				return { errorMessage: 'Order form not found!' };
			}

			return { form: updatedOrderForm };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Update order forms error' };
		}
	}
}

export default new orderFormService();
