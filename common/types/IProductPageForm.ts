import { IProductPage } from "./product";

export interface IProductPageForm extends IProductPage {
	mainImageFile: FileList;
	imageFiles: FileList;
	collectionCode:string;
}