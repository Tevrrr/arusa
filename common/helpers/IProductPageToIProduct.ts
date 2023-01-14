import { IProductPage, IProduct } from '../types/product';
export const IProductPageToIProduct = (data: IProductPage):IProduct => {
    return {
		id: data.id,
		title: data.title,
		filter: data.filter,
		mainImage: data.mainImage,
		price: data.price,
	};
}