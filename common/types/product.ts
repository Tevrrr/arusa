
export interface IProduct {
	_id: string;
	filter: string;
	mainImage: string;
	title: string;
	price: number;
	sellability: number;
}

export interface IProductPage extends IProduct {
	images: string[];
	material: string;
	description: string;
	fullDescription?: string;
	dimensions: IDimensions;
	model: string;
	fabricOrigin: string;
}

export interface IDimensions{
    height: number;
    width: number;
    depth: number;
    weight: number;
}