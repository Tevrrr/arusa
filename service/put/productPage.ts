/** @format */

import axios from 'axios';
import { IProductPage } from './../../common/types/product';

export const putProductPage = async (
	productPage: IProductPage,
	token: string
): Promise<IProductPage|null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.put(
			`${URL}/api/productPage`,
			{ page: productPage },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
        console.log(error);
        return null
	}
};
