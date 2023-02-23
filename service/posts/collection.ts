/** @format */

import axios from 'axios';
import { ICollection } from '../../common/types/collection';

export const postCollection = async (
	name: string,
	filter: string,
	image: File,
	token: string,
	props?: (value: ICollection | null, errorMessage?: string) => void
): Promise<ICollection | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
		const formData = new FormData();

		formData.append('name', name);
		formData.append('filter', filter);
		formData.append('image', image);
		const response = await axios.post(`${URL}/api/collection`, formData, {
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
