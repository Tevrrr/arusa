import { IUser } from './../../common/types/User';
import axios from 'axios';
import { IProductPage } from '../../common/types/product';

export const putUser = async (
	userUpdate: IUser,
	token: string,
	props?: (value: IUser | null, errorMessage?: string) => void
): Promise<IProductPage | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.put(
			`${URL}/api/user`,
			{ userUpdate },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (props) props(response.data);
		return response.data;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};
