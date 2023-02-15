/** @format */

import { IBagItem } from './../../common/types/BagContext';
/** @format */

import { IProductPage } from './../../common/types/product';
import ProductPage from '../models/ProductPage';
import { IProduct } from '../../common/types/product';
import { SortBy } from '../../common/helpers/sortBy';
import Collection from '../models/Collection';
import { FileArray } from 'express-fileupload';
import FileService from './fileService';

interface IQuery {
	sortBy?: string;
	filters?: string[];
	limit?: string;
	skip?: string;
	searchQuery?: string;
}

interface IProductPageResult {
	products?: IProduct[] | IBagItem[] | (IBagItem | undefined)[];
	productPage?: IProductPage;
	countProductsFound?: number;
	errorMessage?: string;
}

class productPageService {
	async getProductPage(id: string): Promise<IProductPageResult> {
		const productPage = await ProductPage.findById(id);
		if (!productPage) {
			return { errorMessage: 'Page not found!' };
		}
		return { productPage };
	}
	async deleteProductPage(id: string): Promise<IProductPageResult> {
		const productPage = await ProductPage.findByIdAndDelete(id);
		if (!productPage) {
			return { errorMessage: 'Page not found!' };
		}
		await FileService.removeFile(productPage.mainImage);
		productPage.images.forEach(async (item) => {
			await FileService.removeFile(item);
		});

		return { productPage };
	}
	async getProductsByIDs(
		params: { _id: string; count: number }[]
	): Promise<IProductPageResult> {
		try {
			const productPages = await ProductPage.find({
				_id: { $in: params.map((item) => item._id) },
			});
			console.log(params);
			console.log(productPages);

			let products: IBagItem[] = [];

			params.forEach((item) => {
				const productPage = productPages.find(
                    (page) => {
                        return page._id.toString() === item._id;
                    }
				);
				if (productPage)
				products.push({
					_id: productPage._id,
					filter: productPage.filter,
					mainImage: productPage.mainImage,
					title: productPage.title,
					price: productPage.price,
					sellability: productPage.sellability,
					collectionCode: productPage.collectionCode,
					collectionName: productPage.collectionName,
					count: item.count,
				});
			});
			//@ts-ignore
			console.log(products);

			//@ts-ignore
			return { products };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Get products error!' };
		}
	}
	async getProducts(params: IQuery): Promise<IProductPageResult> {
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

		try {
			const productPages = await ProductPage.find(searchOptions())
				.skip(Number.parseInt(params.skip || '0'))
				.limit(Number.parseInt(params.limit || '0'))
				.sort(SortBy(params.sortBy || ''));

			const products = productPages.map((item): IProduct => {
				return {
					_id: item._id,
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
			return { products, countProductsFound };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Get products error!' };
		}
	}
	async addProductPage(
		newPage: any,
		pictures: FileArray | null,
		collectionCode?: string
	): Promise<IProductPageResult> {
		try {
			let mainImage: string = '';
			let images: string[] = [];

			if (!pictures?.mainImage || !pictures?.images) {
				return {
					errorMessage:
						'You must specify the main image at least one additional image!',
				};
			}
			//save main image
			let filePath = await FileService.saveFile(
				pictures.mainImage,
				newPage?.title || ''
			);
			if (!filePath) {
				return {
					errorMessage: 'image save error!',
				};
			}
			mainImage = filePath[0];
			//save additional image
			filePath = await FileService.saveFile(
				pictures.images,
				newPage?.title || ''
			);
			if (!filePath) {
				return {
					errorMessage: 'image save error!',
				};
			}
			images = filePath;

			let page: IProductPage;
			if (collectionCode) {
				const collection = await Collection.findById(collectionCode);
				page = await ProductPage.create({
					...newPage,
					mainImage,
					images,
					sellability: 0,
					collectionCode,
					collectionName: collection?.name,
				});
			} else {
				page = await ProductPage.create({
					...newPage,
					mainImage,
					images,
					sellability: 0,
				});
			}

			return { productPage: page };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Add product page error' };
		}
	}
	async updateProductPage(
		id: string,
		page: IProductPage,
		pictures?: FileArray | null
	): Promise<IProductPageResult> {
		const productPage = await ProductPage.findById(id);
		if (!productPage) {
			return { errorMessage: 'Page not found!' };
		}
		let mainImage = productPage.mainImage;
		let images = productPage.images;
		if (pictures) {
			//update main image
			if (pictures?.mainImage) {
				await FileService.removeFile(productPage.mainImage);
				let filePath = await FileService.saveFile(
					pictures.mainImage,
					productPage.title
				);
				if (!filePath) {
					return {
						errorMessage: 'image save error!',
					};
				}
				mainImage = filePath[0];
			}
			//update additional image
			if (pictures?.images) {
				productPage.images.forEach(async (item) => {
					await FileService.removeFile(item);
				});
				let filePath = await FileService.saveFile(
					pictures.images,
					productPage.title
				);
				if (!filePath) {
					return {
						errorMessage: 'image save error!',
					};
				}
				images = filePath;
			}
		}
		const updateProductPage = await ProductPage.findByIdAndUpdate(
			id,
			{ ...page, mainImage, images },
			{
				new: true,
			}
		);
		if (!updateProductPage) {
			return { errorMessage: 'Page not found!' };
		}
		return { productPage: updateProductPage };
	}
}

export default new productPageService();
