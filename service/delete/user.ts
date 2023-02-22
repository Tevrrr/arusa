import { IUser } from './../../common/types/User';
import axios from 'axios';
import { IProductPage } from '../../common/types/product';

export const deleteUser = async (
	id: string,
	token: string
): Promise<IProductPage | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.delete(
			`${URL}/api/user`,
            {
                params: {
                    id
                },
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
