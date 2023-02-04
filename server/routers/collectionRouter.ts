/** @format */

import { Router } from 'express';
import collectionController from '../controllers/collectionController';
import authMiddleware from '../middleware/authMiddleware';

const CollectionRouter = Router();

CollectionRouter.post(
	'/collection',
	authMiddleware(['ADMIN']),
	collectionController.addCollection
);
CollectionRouter.put(
	'/collection',
	authMiddleware(['ADMIN']),
	collectionController.updateCollection
);
CollectionRouter.get(
	'/collection',
	collectionController.getCollections
);

export default CollectionRouter;
