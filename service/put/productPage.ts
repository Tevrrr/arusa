/** @format */

import axios from 'axios';
import { IProductPage } from './../../common/types/product';

export const putProductPage = async (
	productPage: IProductPage,
	token: string,
	mainImage?: File,
	images?: FileList
): Promise<IProductPage | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
        const formData = new FormData();
        if (mainImage) {
			formData.append('mainImage', mainImage);
		}
		if (images) {
			for (let i = 0; i < images.length; i++) {
				formData.append('images', images[i]);
			}
		}

		

		formData.append('page', JSON.stringify(productPage));
		const response = await axios.put(`${URL}/api/productPage`, formData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
