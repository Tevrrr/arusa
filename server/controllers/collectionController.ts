/** @format */

import { Request, Response } from 'express';
import collectionService from '../services/collectionService';

class CollectionController {
	async getCollections(req: Request, res: Response) {
		try {
			const { filter } = req.query;
			const { collections, errorMessage } =
				await collectionService.getCollections(filter?.toString());
			console.log();

			if (errorMessage) {
				res.status(400).json({ error: errorMessage });
			}

			res.status(200).json(collections);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'get collections error' });
		}
	}
	async getCollection(req: Request, res: Response) {
		try {
			const { id } = req.query;
			const { collection, errorMessage } =
				await collectionService.getCollection(id?.toString() || '');

			if (errorMessage) {
				res.status(400).json({ error: errorMessage });
			}

			res.status(200).json(collection);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'get collections error' });
		}
	}
	async deleteCollection(req: Request, res: Response) {
		try {
			const { id } = req.query;
			const { collection, errorMessage } =
				await collectionService.deleteCollection(id?.toString() || '');

			if (errorMessage) {
				res.status(400).json({ error: errorMessage });
			}
            
			res.status(200).json(collection);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'get collections error' });
		}
	}
	async addProductInCollection(req: Request, res: Response) {
		try {
			const { collectionID, productID } = req.body;
			const { collection, errorMessage } =
				await collectionService.addProductInCollection(
					collectionID,
					productID
				);

			if (errorMessage) {
				res.status(400).json({ error: errorMessage });
			}

			res.status(200).json(collection);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'add collection error' });
		}
	}
	async deleteProductFromCollection(req: Request, res: Response) {
		try {
			const { collectionID, productID } = req.body;
			const { collection, errorMessage } =
				await collectionService.deleteProductFromCollection(
					collectionID,
					productID
				);

			if (errorMessage) {
				res.status(400).json({ error: errorMessage });
			}

			res.status(200).json(collection);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'add collection error' });
		}
	}
	async addCollection(req: Request, res: Response) {
		try {
			const { name, filter } = req.body;
			const { collection, errorMessage } =
				await collectionService.addCollection(
					name,
					filter,
					req.files || null
				);

			if (errorMessage) {
				res.status(400).json({ error: errorMessage });
			}

			res.status(200).json(collection);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'add collection error' });
		}
	}
	async updateCollection(req: Request, res: Response) {
		try {
			const { collection } = req.body;
			if (!collection) {
				return res.status(400).send('You must specify the collection!');
			}
			const { collection: updatedCollection, errorMessage } =
				await collectionService.updateCollection(collection);

			if (errorMessage) {
				res.status(400).json({ error: errorMessage });
			}

			res.status(200).json(updatedCollection);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'update collection error' });
		}
	}
}

export default new CollectionController();
