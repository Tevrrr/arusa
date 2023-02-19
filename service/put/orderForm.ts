/** @format */

import axios from "axios";
import { IOrderForm } from "../../common/types/orderForm";

export const putOrderForm = async (
	orderForm: IOrderForm,
	token: string
): Promise<IOrderForm | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.put(
			`${URL}/api/orderForm`,
			{ orderForm },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
