import { IUser } from './../../common/types/User';
import axios from 'axios';


export const getUsers = async (
    token: string,
	props?: (value: IUser[]) => void
): Promise<IUser[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/users`, {
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