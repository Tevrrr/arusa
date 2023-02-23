/** @format */

import axios from "axios";

export const postEmail = async (
	email: string,
	props?: (value: {} | null, errorMessage?: string) => void
): Promise<{} | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

        const response = await axios.post(`${URL}/api/email`, { email });
        
		if (props) props(response.data);
		return response.data;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};
