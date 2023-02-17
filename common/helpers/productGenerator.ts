/** @format */

import { ICollection } from './../types/collection';
import { LOREM_IPSUM, FILTERS, NAMES } from './consts';
import { IProduct, IProductPage } from './../types/product';
import { getRandomInt } from './getRandomInt';

export const productGenerator = (
	amount: number,
	collections?: ICollection[]
): IProduct[] => {
	let products: IProduct[] = [];
	for (let i = 0; i < amount; i++) {
		let filter = FILTERS[getRandomInt(FILTERS.length)];
		let name = NAMES[getRandomInt(NAMES.length)];

		let nextItem: IProduct = {
			_id: ''+i,
			filter,
			title: `${name} ${filter}`,
			price: getRandomInt(50) * 10,
			sellability: getRandomInt(50) * 10,
			mainImage: '/mockups/' + filter + (getRandomInt(3) + 1) + '.png',
		};

		products.push(nextItem);
	}
	return products;
};

export const productPageGenerator = (products: IProduct[]): IProductPage[] => {
	let productPages: IProductPage[] = [];
	for (let i = 0; i < products.length; i++) {
		let images = [
			'/mockups/' + products[i].filter + '02.png',
			'/mockups/' + products[i].filter + '03.png',
		];
		let nextItem: IProductPage = {
			...products[i],
			images,
			material: 'Triple wardobe, mango wood',
			description: LOREM_IPSUM,
			fullDescription: LOREM_IPSUM + LOREM_IPSUM,
			model: 'Requint',
			fabricOrigin: 'Canada',
			dimensions: {
				height: getRandomInt(30) + 10,
				width: getRandomInt(30) + 10,
				depth: getRandomInt(30) + 10,
				weight: getRandomInt(10) + 5,
			},
		};
		productPages.push(nextItem);
	}
	return productPages;
};
