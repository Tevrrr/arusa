/** @format */

import axios from 'axios';
import { IProduct } from '../../common/types/product';
import { productsJSON } from '../data/products';

export const getProductsByCollection = async (
	code: string,
	props?: (value: IProduct[]) => void
): Promise<IProduct[]> => {
	const products: IProduct[] = await JSON.parse(productsJSON);

	const collectionProducts: IProduct[] = products.filter((item) => {
		return code === item.collectionCode;
	});

	if (props) props(collectionProducts);
	return collectionProducts;
};

export const getProductsByFilter = async (
	filters: string[],
	sortBy: string,
	props?: (value: IProduct[], countProductsFound: number) => void,
	limit: number = 0,
	skip: number = 0
): Promise<IProduct[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/products`, {
			params: {
				filters,
				sortBy,
				limit,
				skip,
			},
		});
		if (props) props(response.data.products, response.data.countProductsFound);
		return response.data.products;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getProductsByQuery = async (
	searchQuery: string,
	sortBy: string,
	props?: (value: IProduct[], countProductsFound: number) => void,
	limit: number = 0,
	skip: number = 0
): Promise<IProduct[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/products`, {
			params: {
				searchQuery,
				sortBy,
				limit,
				skip,
			},
		});

		if (props)
			props(response.data.products, response.data.countProductsFound);
		return response.data.products;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getTopProducts = async (
	count: number,
	props?: (value: IProduct[] | null) => void
): Promise<IProduct[] | null> => {
	const products = await getProductsByFilter(
		[],
		'Best selling',
		props,
		count
    );

	return products;
};
