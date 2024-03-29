import { Loading } from './loading';
import { IProduct } from './product';
export interface IProductProvider {
	products: IProduct[];
	loading: Loading;
	filters: string[];
	sortBy: string;
	searchQuery: string;
	productQuantity: number;
	countProductsFound: number;
	addNextProducts: () => void;
	updateProducts: () => void;
	setSearchQuery: (value: string) => void;
	sortByToggle: (value: string) => void;
	filterToggle: (value: string) => void;
} 