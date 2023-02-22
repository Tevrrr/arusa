import axios from 'axios';
import { IOrderForm } from '../../common/types/orderForm';


export const getOrder = async (
	token: string,
	id: string,
	props?: (value: IOrderForm) => void
): Promise<IOrderForm | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/orderForm`, {
			params: {
				id,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (props) props(response.data);
		return response.data.forms;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getOrders = async (
	token: string,
	limit: number = 0,
	skip: number = 0,
	finished: boolean | string = false,
	props?: (value: IOrderForm[], countForms: number) => void
): Promise<IOrderForm[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/orderForms`, {
			params: {
				limit,
				skip,
				finished,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (props) props(response.data.forms, response.data.countForms);
		return response.data.forms;
	} catch (error) {
		console.log(error);
		return null;
	}
};
