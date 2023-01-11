import { IProduct } from './product';
export interface IBagContext {
	products: IBagItem[];
	count: number;
	totalPrice: number;
	addProduct: (product: IProduct) => void;
	incrementProductCount: (id: number) => void;
	decrementProductCount: (id: number) => void;
}
export interface IBagItem extends IProduct {
    count: number;
    
}

