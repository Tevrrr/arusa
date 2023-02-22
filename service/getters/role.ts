import axios from 'axios';


export const getRoles = async (
	token: string,
	props?: (value: string[]) => void
): Promise<string[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/roles`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (props) props(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};