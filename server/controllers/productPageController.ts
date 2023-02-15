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
				return res
					.status(400)
					.json({ message: 'You need to specify the page ID!' });
			}

			const { productPage, errorMessage } =
				await productPageService.getProductPage(pageID);
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}

			res.status(200).json(productPage);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'get productPage error' });
		}
	}
	async deleteProductPage(req: Request, res: Response) {
		try {
			const { pageID } = req.query;
			if (!pageID || typeof pageID !== 'string') {
				return res
					.status(400)
					.json({ message: 'You need to specify the page ID!' });
			}

			const { productPage, errorMessage } =
				await productPageService.deleteProductPage(pageID);

			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}

			res.status(200).json(productPage);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'get productPage error' });
		}
	}
	async getProducts(req: Request, res: Response) {
		try {
			const params = req.query;

			const { products, countProductsFound, errorMessage } =
				await productPageService.getProducts(params);
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			res.status(200).json({ products, countProductsFound });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'get product error' });
		}
	}
	async getProductsByIDs(req: Request, res: Response) {
		try {
			const { bag } = req.query;

			const { products, countProductsFound, errorMessage } =
				await productPageService.getProductsByIDs(
					JSON.parse(bag?.toString() || '[]')
				);
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			res.status(200).json({ products, countProductsFound });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'get product error' });
		}
	}
	async addProductPage(req: Request, res: Response) {
		try {
			const { page: JSONpage } = req.body;
			const page = JSON.parse(JSONpage);
			const { productPage, errorMessage } =
				await productPageService.addProductPage(
					page,
					req.files || null,
					page?.collectionCode
				);
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			res.status(200).json(productPage);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'add productPage error' });
		}
	}
	async updateProductPage(req: Request, res: Response) {
		try {
			const { page: JSONpage } = req.body;
			if (!JSONpage) {
				return res
					.status(400)
					.json({ message: 'You must specify the order form!' });
			}
			const page = JSON.parse(JSONpage);
			const { productPage, errorMessage } =
				await productPageService.updateProductPage(
					page._id,
					page,
					req.files
				);
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			res.status(200).json(productPage);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'put order forms error' });
		}
	}
}

export default new productPageController();
