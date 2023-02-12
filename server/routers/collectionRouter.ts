/** @format */

import { Router } from 'express';
import collectionController from '../controllers/collectionController';
import authMiddleware from '../middleware/authMiddleware';

const collectionRouter = Router();

collectionRouter.post(
	'/collection',
	authMiddleware(['ADMIN']),
	collectionController.addCollection
);
collectionRouter.put(
	'/collection',
	authMiddleware(['ADMIN']),
	collectionController.updateCollection
);
collectionRouter.get(
	'/collection',
	collectionController.getCollections
);

export default collectionRouter;
