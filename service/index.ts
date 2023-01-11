/** @format */

import { IProduct } from './../common/types/product';
import { productsJSON } from './data/products';




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

export const getProductsByFilter = (
	filters: string[],
	sortBy: string
): IProduct[] => {
		const products: IProduct[] = JSON.parse(productsJSON);

	let filteredProducts: IProduct[] = filters.length
		? products.filter((item) => filters.includes(item.filter))
		: products;

	return SortBy(sortBy, filteredProducts);
};
export const getProductsByQuery = (
	query: string,
	sortBy: string
): IProduct[] => {
	const products: IProduct[] = JSON.parse(productsJSON);
	let filteredProducts: IProduct[] = products.filter((item) =>
		item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
	);

	return SortBy(sortBy, filteredProducts);
};
