/** @format */

import axios from "axios";
import { IBagItem } from "../../common/types/BagContext";
import { IClientData } from "../../common/types/clientData";
import { IOrderForm } from "../../common/types/orderForm";

export const submitForm = async (
	products: IBagItem[],
	clientData: IClientData,
	props?: (value: IOrderForm | null, errorMessage?: string) => void
): Promise<IOrderForm | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const result = { clientData, products };
		console.log(result);
		const response = await axios.post(`${URL}/api/orderForm`, result);
		if (props) props(response.data);
		return response.data;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};
