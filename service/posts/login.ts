/** @format */

import { IUserResponse } from '../../common/types/UserContext';
import { IUser } from './../../common/types/User';
/** @format */
import axios from 'axios';

export const loginUser = async (
	username: string,
	password: string,
	props?: (user: IUser | null) => void
): Promise<IUserResponse | null> => {
	try {
        const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const result = { username, password };
		console.log(result);
		const response = await axios.post(`${URL}/api/auth/login`, result);
		console.log(response);
		if (props) props(response.data || null);
		return response.data || null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
