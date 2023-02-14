import { IProduct } from './product';
export interface IBagContext {
	products: IBagItem[];
	count: number;
	totalPrice: number;
	addProduct: (product: IProduct) => void;
	removeProduct: (id: string) => void;
	incrementProductCount: (id: string) => void;
	decrementProductCount: (id: string) => void;
	emptyBag: () => void;
}
export interface IBagItem extends IProduct {
    count: number;
    
}

