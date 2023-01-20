/** @format */

import { IProductPage } from "../../common/types/product";
import { productPagesJSON } from "../data/products";

export const getProductPage = async (
	id: number,
	props?: (value: IProductPage | null) => void
): Promise<IProductPage | null> => {
	const productPages: IProductPage[] = await JSON.parse(productPagesJSON);
	const result = productPages.find((item) => {
		return item.id === id;
	});
	if (props) props(result || null);
	return result || null;
};
