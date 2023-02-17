import { ICollection } from './../../common/types/collection';
import axios from 'axios';

export const addProductInCollection = async (
	collectionID: string,
	productID: string,
	token: string
): Promise<ICollection | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.put(
			`${URL}/api/productInCollection`,
			{ collectionID, productID },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const deleteProductFromCollection = async (
	collectionID: string,
	productID: string,
	token: string
): Promise<ICollection | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.put(
			`${URL}/api/deleteProduct`,
			{ collectionID, productID },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
