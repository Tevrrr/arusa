/** @format */

const mongoose = require('mongoose');
const { ProductSchema } = require('./Product');

export const ProductPageType = {
	...ProductSchema,
	images: { type: Array<String>, required: true },
	material: { type: String, required: true },
	description: { type: String, required: true },
	fullDescription: String,
	dimensions: {
		height: { type: Number, required: true },
		width: { type: Number, required: true },
		depth: { type: Number, required: true },
		weight: { type: Number, required: true },
	},
	model: { type: String, required: true },
	fabricOrigin: { type: String, required: true },
};

const ProductPageSchema = new mongoose.Schema(ProductPageType);
const ProductPage = mongoose.model('ProductPage', ProductPageSchema);
exports.ProductPage = ProductPage;
exports.ProductPageSchema = ProductPageSchema;