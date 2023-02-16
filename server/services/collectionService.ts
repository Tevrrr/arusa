/** @format */

import { Request, Response } from 'express';
import Collection, { ICollection } from '../models/Collection';

interface ICollectionResult {
	collection?: ICollection;
	collections?: ICollection[];
	errorMessage?: string;
}

class CollectionService {
	async getCollections(filter?:string): Promise<ICollectionResult> {
		try {
			const collections = await Collection.find({ filter });
			return { collections };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Get collections error' };
		}
	}
	async getCollection(id:string): Promise<ICollectionResult> {
		try {
            const collection = await Collection.findById(id);
            if (!collection) {
				return { errorMessage: 'Collection not found' };
			}
			return { collection };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Get collections error' };
		}
	}
	async addCollection(
		name: string,
		filter: string
	): Promise<ICollectionResult> {
		try {
			const newCollection = await Collection.create({
				name,
				filter,
				image: '/',
				products: [],
			});

			return { collection: newCollection };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Add collection error' };
		}
	}
	async addProductInCollection(
		collectionID: string,
		productID: string
	): Promise<ICollectionResult> {
		try {
			const collection = await Collection.findById(collectionID);
			if (!collection) {
				return { errorMessage: 'Collection not found' };
			}
			if (collection.products.find((value) => value === productID)) {
				return {
					errorMessage: 'This product is already in the collection',
				};
			}
			const updatedCollection = await Collection.findByIdAndUpdate(
				collectionID,
				{
					products: [...collection.products, productID],
				},
				{ new: true }
			);
			if (!updatedCollection) {
				return { errorMessage: 'Update collection error' };
			}
			return { collection: updatedCollection };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Update collection error' };
		}
	}
	async updateCollection(
		collection: ICollection
	): Promise<ICollectionResult> {
		try {
			const updatedCollection = await Collection.findByIdAndUpdate(
				collection._id,
				collection,
				{ new: true }
			);

			if (!updatedCollection) {
				return { errorMessage: 'Collection not found' };
			}

			return { collection: updatedCollection };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Update collection error' };
		}
	}
}

export default new CollectionService();
