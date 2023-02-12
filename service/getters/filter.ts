/** @format */

import axios from "axios";

export const getFilters = async (
	props?: (value: string[]) => void,
): Promise<string[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/filter`);
		if (props)
			props(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
