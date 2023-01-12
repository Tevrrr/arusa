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
) => {
	const products: IProduct[] = await JSON.parse(productsJSON);

	let filteredProducts: IProduct[] = filters.length
		? products.filter((item) => filters.includes(item.filter))
		: products;

	props( SortBy(sortBy, filteredProducts));
};
export const getProductsByQuery = async (
	query: string,
	sortBy: string,
	props: (value: IProduct[]) => void
) => {
	const products: IProduct[] = await JSON.parse(productsJSON);
	let filteredProducts: IProduct[] = products.filter((item) =>
		item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
	);

	props( SortBy(sortBy, filteredProducts));
};

export const getTopProducts = async (count: number): Promise<IProduct[]> => {
	const products: IProduct[] = await JSON.parse(productsJSON);
	return products;
};

export const getProductPage = async (
	id: number,
	props: (value: IProductPage | undefined) => void
) => {
    const productPages: IProductPage[] = await JSON.parse(productPagesJSON);
	props(
		productPages.find((item) => {
			return (item.id = id);
		})
	);

};
