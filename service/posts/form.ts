/** @format */

import axios from "axios";
import { IBagItem } from "../../common/types/BagContext";
import { IClientData } from "../../common/types/clientData";

export const submitForm = async (products: IBagItem[], clientData: IClientData) => {
    try {
        const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
        
		const result = { clientData, products };
		console.log(result);
		const response = await axios.post(`${URL}/api/orderForm`,  result);
		console.log(response);
    } catch (error) {
        console.log(error)
    }
    
    
};
