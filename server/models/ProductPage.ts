import { IProductPage } from './../../common/types/product';
/** @format */

import mongoose from 'mongoose';



export const ProductPageType = {
	filter: { type: String, ref:'Filter', required: true },
	mainImage: { type: String, required: true },
	title: { type: String, required: true },
	price: { type: Number, required: true },
	sellability: { type: Number, required: true },
	images: [{ type: String, required: true }],
	material: { type: String, required: true },
	description: { type: String, required: true },
	model: { type: String, required: true },
	fabricOrigin: { type: String, required: true },
	dimensions: {
		type: {
			height: { type: Number, required: true },
			width: { type: Number, required: true },
			depth: { type: Number, required: true },
			weight: { type: Number, required: true },
		},
		required: true,
	},

	fullDescription: String,
};

const ProductPageSchema = new mongoose.Schema<IProductPage>(ProductPageType);
const ProductPage = mongoose.model<IProductPage>(
	'ProductPage',
	ProductPageSchema
);
export default ProductPage;