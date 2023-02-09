/** @format */

import axios from "axios";
import { IProductPage } from "../../common/types/product";
import { productPagesJSON } from "../data/products";

export const getProductPage = async (
	pageID: string,
	props?: (value: IProductPage | null) => void
): Promise<IProductPage | null> => {
	const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

	const response = await axios.get(`${URL}/api/productPage`, {
		params: {
			pageID,
		},
	});

	if (props) props(response.data || null);
	return response.data || null;
};
