

/** @format */

import axios from 'axios';
import { ICollection } from '../../common/types/collection';

export const postCollection = async (
	name:string,
	filter:string,
	token: string
): Promise<ICollection | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.post(
			`${URL}/api/collection`,
			{ name, filter },
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
