import { IProductPage } from './../../common/types/product';
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

class productPageService {
	async getProductPage(id: string): Promise<IProductPage | null> {
		const productPage = await ProductPage.findById(id);
		return productPage;
	}
	async getProducts(
		params: IQuery
	): Promise<{ products: IProduct[]; countProductsFound: number }> {
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
		return { products, countProductsFound };
	}
	async addProductPage(newPage: {}): Promise<IProductPage> {
		const page = await ProductPage.create(newPage);
		return page;
	}
	async updateProductPage(id:string,page:IProductPage): Promise<IProduct | null> {
		const updatedOrderForm = await ProductPage.findByIdAndUpdate(
			id,
			page,
			{ new: true }
        );
        return updatedOrderForm;
	}
}

export default new productPageService();
