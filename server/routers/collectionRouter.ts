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
collectionRouter.put(
	'/productInCollection',
	authMiddleware(['ADMIN']),
	collectionController.addProductInCollection
);
collectionRouter.put(
	'/deleteProduct',
	authMiddleware(['ADMIN']),
	collectionController.deleteProductFromCollection
);

collectionRouter.get(
	'/collections',
	collectionController.getCollections
);
collectionRouter.get('/collection', collectionController.getCollection);

export default collectionRouter;
