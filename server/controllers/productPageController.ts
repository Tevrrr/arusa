/** @format */

import { Request, Response } from 'express';
import ProductPage from '../models/ProductPage';
import { IProduct } from '../../common/types/product';

class productPageController {
	async getProductPage(req: Request, res: Response) {
		try {
			const { id } = req.body;
			if (!id) {
				return res.status(400).send('You need to specify the page ID!');
			}

			const productPages = await ProductPage.find({ id });
			res.status(200).json(productPages);
		} catch (error) {
			console.log(error);
			res.status(400).send('get productPage error');
		}
	}
	async getProducts(req: Request, res: Response) {
		try {
			const { query } = req.body;
			const pages = await ProductPage.find(query || {});
			res.status(200).json(
				pages.map((item): IProduct => {
					return {
						id: item.id,
						filter: item.filter,
						mainImage: item.mainImage,
						title: item.title,
						price: item.price,
						sellability: item.sellability,
						collectionCode: item.collectionCode,
						collectionName: item.collectionName,
					};
				})
			);
		} catch (error) {
			console.log(error);
			res.status(400).send('get product error');
		}
	}
	async addProductPage(req: Request, res: Response) {
		try {
			const {
				filter,
				mainImage,
				images,
				title,
				price,
				sellability,
				collectionCode,
				collectionName,
				material,
				description,
				fullDescription,
				dimensions,
				model,
				fabricOrigin,
			} = req.body;
			const Page = await ProductPage.create({
				filter,
				mainImage,
				images,
				title,
				price,
				sellability,
				collectionCode,
				collectionName,
				material,
				description,
				fullDescription,
				dimensions,
				model,
				fabricOrigin,
			});
			res.status(200).json(Page);
		} catch (error) {
			console.log(error);
			res.status(400).send('add productPage error');
		}
	}
	async updateProductPage(req: Request, res: Response) {
		try {
			const { Page } = req.body;
			if (!Page) {
				return res.status(400).send('You must specify the order form!');
			}
			const updatedOrderForm = await ProductPage.findByIdAndUpdate(
				Page.id,
				Page,
				{ new: true }
			);
			res.status(200).json(updatedOrderForm);
		} catch (error) {
			console.log(error);
			res.status(400).send('put order forms error');
		}
	}
}

export default new productPageController();
