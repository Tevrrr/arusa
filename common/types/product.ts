
export interface IProduct {
	id: string;
	filter: string;
	mainImage: string;
	title: string;
	price: number;
	sellability: number;
	collectionCode?: string;
	collectionName?: string;
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