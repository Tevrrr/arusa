/** @format */

import axios from "axios";
import { IOrderForm } from "../../common/types/orderForm";

export const putOrderForm = async (
	orderForm: IOrderForm,
	token: string,
	props?: (value: IOrderForm | null, errorMessage?: string) => void
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
		if (props) props(response.data);
		return response.data;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};
