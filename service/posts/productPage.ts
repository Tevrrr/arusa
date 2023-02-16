/** @format */

import axios from 'axios';
import { IProductPage } from './../../common/types/product';

export const postProductPage = async (
	productPage: IProductPage,
	token: string,
	mainImage: File,
    images: FileList,
    collectionID?: string
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
        if (response.data._id && collectionID) {
			console.log(response.data, collectionID);
			const collectionsResponse = await axios.put(
				`${URL}/api/productInCollection`,
				{ collectionID, productID: response.data._id },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log(collectionsResponse);
		}
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
