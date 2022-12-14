import { LOREM_IPSUM, FILTERS, NAMES } from './consts';
import { IProduct } from './../types/product';

const getRandomInt = (max:number):number => {
	return Math.floor(Math.random() * max);
}

export const productGenerator = (amount: number): IProduct[] => {
    let products: IProduct[] = [];
    for (let i = 0; i < amount; i++) {
        let filter = FILTERS[getRandomInt(FILTERS.length)];
        let name = NAMES[getRandomInt(NAMES.length)]
        let images = [
			'/mockups/' + filter + (getRandomInt(3) + 1) + '.png',
			'/mockups/' + filter + '02.png',
			'/mockups/' + filter + '03.png',
		];
        let nextItem: IProduct = {
			id: i,
			filter,
			title: `${name} ${filter}`,
			price: getRandomInt(50) * 10,
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
        products.push(nextItem);
		
    }
    return products;
    
};