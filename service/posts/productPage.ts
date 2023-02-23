/** @format */

import axios from 'axios';
import { IProductPage } from './../../common/types/product';

export const postProductPage = async (
	productPage: IProductPage,
	token: string,
	mainImage: File,
	images: FileList,
	props?: (value: IProductPage | null, errorMessage?: string) => void
): Promise<IProductPage | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
		const formData = new FormData();
		formData.append('mainImage', mainImage);

		for (let i = 0; i < images.length; i++) {
			formData.append('images', images[i]);
		}

		formData.append('page', JSON.stringify(productPage));

		const response = await axios.post(`${URL}/api/productPage`, formData, {
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
