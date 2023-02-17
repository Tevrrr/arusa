/** @format */

import axios from 'axios';
import { IProductPage } from './../../common/types/product';
import { addProductInCollection } from '../put/collection';

export const postProductPage = async (
	productPage: IProductPage,
	token: string,
	mainImage: File,
    images: FileList
) => {
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
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
