/** @format */

import axios from "axios";
import { IProductPage } from "../../common/types/product";
import { productPagesJSON } from "../data/products";

export const deleteProductPage = async (
    pageID: string,
    token:string,
	props?: (value: IProductPage | null) => void
): Promise<IProductPage | null> => {
	const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

	const response = await axios.delete(`${URL}/api/productPage`, {
		params: {
			pageID,
		},
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (props) props(response.data || null);
	return response.data || null;
};
