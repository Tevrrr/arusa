/** @format */

import axios from 'axios';
import { IProductPage } from './../../common/types/product';

export const postProductPage = async (productPage: IProductPage, token: string) => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.post(
			`${URL}/api/productPage`,
			productPage,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
