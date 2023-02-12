/** @format */

import { Request, Response } from 'express';
import Collection from '../models/Collection';

class CollectionController {
	async getCollections(req: Request, res: Response) {
		try {
			const collections = await Collection.find({});
			res.status(200).json( collections );
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'get collections error' });
		}
	}
	async addCollection(req: Request, res: Response) {
		try {
            const { name, filter, image } = req.body;

			const newCollection = await Collection.create({
				name,
				filter,
				image,
			});
			res.status(200).json(newCollection);
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
			const updatedOrderForm = await Collection.findByIdAndUpdate(
				collection.id,
				collection,
				{ new: true }
			);
			res.status(200).json(updatedOrderForm);
		} catch (error) {
			console.log(error);
            res.status(400).json({ message: 'update collection error' });
		}
	}
}

export default new CollectionController();
