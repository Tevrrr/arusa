/** @format */

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
	props: (value: IProduct[]) => void
): Promise<IProduct[]> => {
	const products: IProduct[] = await JSON.parse(productsJSON);

	const filteredProducts: IProduct[] = filters.length
		? products.filter((item) => filters.includes(item.filter))
		: products;
	const result = SortBy(sortBy, filteredProducts);
	if (props) props(result);
	return result;
};

export const getProductsByQuery = async (
	query: string,
	sortBy: string,
	props?: (value: IProduct[]) => void
): Promise<IProduct[]> => {
	const products: IProduct[] = await JSON.parse(productsJSON);
	const filteredProducts: IProduct[] = products.filter((item) =>
		item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
	);
	const result = SortBy(sortBy, filteredProducts);
	if (props) props(result);
	return result;
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
