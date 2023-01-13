/** @format */

import { IProduct, IProductPage } from './../common/types/product';
import { productsJSON, productPagesJSON } from './data/products';

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
	if(props) props(result);
	return result;
};

export const getTopProducts = async (
	count: number,
	props?: (value: IProduct[]) => void
): Promise<IProduct[]> => {
	const products: IProduct[] = await JSON.parse(productsJSON);
	if (props) props(products);
	return products;
};

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
