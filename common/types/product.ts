
export interface IProduct {
    id: number;
    filter: string;
	images: string[];
	title: string;
	price: number;

}

export interface IProductPage extends IProduct {
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