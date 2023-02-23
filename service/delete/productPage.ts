/** @format */

import axios from 'axios';
import { IProductPage } from '../../common/types/product';

export const deleteProductPage = async (
	pageID: string,
	token: string,
	props?: (value: IProductPage | null, errorMessage?: string) => void
): Promise<IProductPage | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.delete(`${URL}/api/productPage`, {
			params: {
				pageID,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (props) props(response.data);
		return response.data;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};
