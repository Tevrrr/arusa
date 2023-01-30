/** @format */

import mongoose from 'mongoose';

export const ProductType = {
	filter: { type: String, required: true },
	mainImage: { type: String, required: true },
	title: { type: String, required: true },
	price: { type: Number, required: true },
	sellability: { type: Number, required: true },
	collectionCode: String,
	collectionName: String,
};
// exports.ProductType;
const ProductSchema = new mongoose.Schema(ProductType);
const Product = mongoose.model('Product', ProductSchema);
export default Product;