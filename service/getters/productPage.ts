/** @format */

import axios from 'axios';
import { IProductPage } from '../../common/types/product';

export const getProductPage = async (
	pageID: string,
	props?: (value: IProductPage | null) => void
): Promise<IProductPage | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/productPage`, {
			params: {
				pageID,
			},
		});

		if (props) props(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		if (props) props(null);
		return null;
	}
};
