/** @format */

import { IUser } from './../../common/types/User';
import axios from 'axios';

export const registerUser = async (
	username: string,
	password: string,
	role: string,

	token: string,
	props?: (value: IUser) => void
): Promise<IUser | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.post(
			`${URL}/api/auth/registration`,
			{ username, password, role },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (props) props(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
