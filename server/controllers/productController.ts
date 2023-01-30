/** @format */

import { Request, Response } from 'express';
import Product from '../models/Product';

class productController {
	async getProduct(req: Request, res: Response) {
		try {
			const products = await Product.find({});
			res.status(200).json(products);
		} catch (error) {
			console.log(error);
			res.status(400).send('get product error');
		}
	}
	async addProduct(req: Request, res: Response) {
		try {
			const {
				id,
				filter,
				mainImage,
				title,
				price,
				sellability,
				collectionCode,
				collectionName,
			} = req.body;
			const post = await Product.create({
				id,
				filter,
				mainImage,
				title,
				price,
				sellability,
				collectionCode,
				collectionName,
			});
			res.status(200).json(post);
		} catch (error) {
			console.log(error);
			res.status(400).send('add product error');
		}
	}
}

export default new productController();
