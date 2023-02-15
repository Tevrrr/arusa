/** @format */
export interface IClientData {
	firstName: string;
	lastName: string;
	address: string;
	phone: string;
}

export interface IProductForm {
	id: string;
	count: number;
}

export interface IOrderForm {
	_id: string;
	clientData: IClientData;
	products: IProductForm[];
	finished: boolean;
	date: string;
}
