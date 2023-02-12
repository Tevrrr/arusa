/** @format */

import axios from "axios";
import { ICollection } from "../../common/types/collection";


export const getCollection = async (): Promise<ICollection | null> => {
    try {
        const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

        const response = await axios.get(`${URL}/api/collection`);
        return response.data;

    } catch (error) {
        console.log(error)
        return null
    }
}
	
