/** @format */

import axios from "axios";
import { IProduct } from "../../common/types/product";
import { productsJSON } from "../data/products";

const SortBy = (sortBy: string, Products: IProduct[]): IProduct[] => {
	if (sortBy === 'Price: low to high') {
		return Products.sort((a, b) => {
			if (a.price < b.price) return -1;
			if (a.price > b.price) return 1;
			return 0;
		});
	}
	if (sortBy === 'Price: high to low') {
		return Products.sort((a, b) => {
			if (a.price < b.price) return 1;
			if (a.price > b.price) return -1;
			return 0;
		});
	}
	if (sortBy === 'Best selling') {
		return Products.sort((a, b) => {
			if (a.sellability < b.sellability) return 1;
			if (a.sellability > b.sellability) return -1;
			return 0;
		});
	}
	if (sortBy === 'Z-A') {
		return Products.sort((a, b) => {
			let nameA = a.title.toLowerCase(),
				nameB = b.title.toLowerCase();
			if (nameA < nameB) return -1;
			if (nameA > nameB) return 1;
			return 0;
		});
	}

	return Products.sort((a, b) => {
		let nameA = a.title.toLowerCase(),
			nameB = b.title.toLowerCase();
		if (nameA < nameB) return 1;
		if (nameA > nameB) return -1;
		return 0;
	});
};

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
	props: (value: IProduct[]) => void,
    limit: number = 0,
    skip: number = 0,
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
        console.log(response.data);
        if (props) props(response.data);
		return response.data;
	} catch (error) {
        console.log(error);
        return null;
	}
};

export const getProductsByQuery = async (
	searchQuery: string,
	sortBy: string,
	props?: (value: IProduct[]) => void
): Promise<IProduct[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/products`, {
			params: {
				searchQuery,
				sortBy,
			},
		});
		console.log(response.data);
		if (props) props(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getTopProducts = async (
	count: number,
	props?: (value: IProduct[]) => void
): Promise<IProduct[]> => {
	const products: IProduct[] = await JSON.parse(productsJSON);
	const result = products.slice(0, count);
	if (props) props(result);
	return result;
};
