import { IProductForm } from './../../common/types/orderForm';
import { IBagItem } from './../../common/types/BagContext';
import axios from 'axios';
import { IProduct } from '../../common/types/product';
import { productsJSON } from '../data/products';
// /productsByIDs

export const getProductsBag = async (
	bag: IProductForm[],
	props?: (value: IBagItem[]) => void
): Promise<IBagItem[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/productsByIDs`, {
			params: {
				bag: JSON.stringify(bag),
			},
		});
		if (props) props(response.data.products);
		return response.data.products;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getProductsByIDs = async (
	productIDs: string[],
	props?: (value: IBagItem[]) => void
): Promise<IProduct[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/productsByIDs`, {
			params: {
				productIDs: JSON.stringify(productIDs),
			},
		});
		if (props) props(response.data.products);
		return response.data.products;
	} catch (error) {
		console.log(error);
		return null;
	}
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
		if (props)
			props(response.data.products, response.data.countProductsFound);
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
