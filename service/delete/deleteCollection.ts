import { ICollection } from '../../common/types/collection';
/** @format */

import axios from "axios";


export const deleteCollection = async (
	id: string,
	token: string,
	props?: (value: ICollection | null) => void
): Promise<ICollection | null> => {
	const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

	const response = await axios.delete(`${URL}/api/collection`, {
		params: {
			id,
		},
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (props) props(response.data || null);
	return response.data || null;
};
