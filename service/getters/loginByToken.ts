/** @format */

import { IUserResponse } from '../../common/types/UserContext';
import { IUser } from './../../common/types/User';
/** @format */
import axios from 'axios';

export const loginUserByToken = async (
	token: string,
	props?: (user: IUser | null) => void
): Promise<IUser | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';


        const response = await axios.get(`${URL}/api/auth/login`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(response);
		if (props) props(response.data || null);
		return response.data || null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
