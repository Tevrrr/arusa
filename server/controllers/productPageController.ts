/** @format */

import { Request, Response } from 'express';
import ProductPage from '../models/ProductPage';
import { IProduct } from '../../common/types/product';
import { SortBy } from '../../common/helpers/sortBy';
import productPageService from '../services/productPageService';



class productPageController {
	async getProductPage(req: Request, res: Response) {
		try {
			const { pageID } = req.query;
			if (!pageID || typeof pageID !== 'string') {
				return res.status(400).send('You need to specify the page ID!');
			}

            const productPage = await productPageService.getProductPage(pageID);
			res.status(200).json(productPage);
		} catch (error) {
			console.log(error);
			res.status(400).send('get productPage error');
		}
	}
	async getProducts(req: Request, res: Response) {
		try {
			const params = req.query;

            const result = await productPageService.getProducts(params);

            res.status(200).json(result);
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
			const page = await productPageService.addProductPage({
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
			res.status(200).json(page);
		} catch (error) {
			console.log(error);
			res.status(400).send('add productPage error');
		}
	}
	async updateProductPage(req: Request, res: Response) {
		try {
			const { page } = req.body;
			if (!page) {
				return res.status(400).send('You must specify the order form!');
			}
			const result = await productPageService.updateProductPage(page.id, page);
            if (!result) {
				return res.status(400).send('Page not found!');
			}
			res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(400).send('put order forms error');
		}
	}
}

export default new productPageController();
