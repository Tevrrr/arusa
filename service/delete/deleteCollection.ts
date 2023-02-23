import { ICollection } from '../../common/types/collection';
/** @format */

import axios from "axios";


export const deleteCollection = async (
	id: string,
	token: string,
	props?: (value: ICollection | null, errorMessage?: string) => void
): Promise<ICollection | null> => {
    try{
	const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

	const response = await axios.delete(`${URL}/api/collection`, {
		params: {
			id,
		},
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
		if (props) props(response.data);
		return response.data;
	} catch (error:any) {
        console.log(error);
        if (props) props(null, error.response.data.message);
		return null;
	}
};
