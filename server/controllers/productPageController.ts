/** @format */

import { Request, Response } from 'express';
import ProductPage from '../models/ProductPage';
import { IProduct } from '../../common/types/product';
import { SortBy } from '../../common/helpers/sortBy';

interface IQuery {
	sortBy?: string;
	filters?: string[];
	limit?: string;
	skip?: string;
	searchQuery?: string;
}

class productPageController {
	async getProductPage(req: Request, res: Response) {
		try {
			const { pageID } = req.query;
			if (!pageID) {
				return res.status(400).send('You need to specify the page ID!');
			}

            const productPages = await ProductPage.findById(pageID);
            console.log(pageID, productPages);
			res.status(200).json(productPages);
		} catch (error) {
			console.log(error);
			res.status(400).send('get productPage error');
		}
	}
	async getProducts(req: Request, res: Response) {
		try {
			const searchOptions = (): {} => {
				return {
					...(params.filters ? { filter: params.filters } : {}),
					...(params.searchQuery
						? {
								title: {
									$regex: new RegExp(params.searchQuery, 'i'),
								},
						  }
						: {}),
				};
			};

			const params: IQuery = req.query;

			const productPages = await ProductPage.find(searchOptions())
				.skip(Number.parseInt(params.skip || '0'))
				.limit(Number.parseInt(params.limit || '0'))
                .sort(SortBy(params.sortBy || ''));
            
            const products = productPages.map((item): IProduct => {
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
			});
            
			const countProductsFound = await ProductPage.find(
				searchOptions()
			).countDocuments();

            res.status(200).json({
				products,
				countProductsFound,
			});
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
