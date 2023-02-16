/** @format */

import axios from 'axios';
import { ICollection } from '../../common/types/collection';

export const getCollections = async (): Promise<ICollection[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/collections`);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getCollectionsByFilter = async (filter:string): Promise<ICollection | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/collections`, { params:{ filter}});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getCollectionByID = async (
	id: string
): Promise<ICollection | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/collection`, {
			params: { id },
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
