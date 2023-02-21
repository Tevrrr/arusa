/** @format */

import { Router } from 'express';
import collectionController from '../controllers/collectionController';
import authMiddleware from '../middleware/authMiddleware';

const collectionRouter = Router();

collectionRouter.post(
	'/collection',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	collectionController.addCollection
);
collectionRouter.put(
	'/collection',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	collectionController.updateCollection
);
collectionRouter.delete(
	'/collection',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	collectionController.deleteCollection
);
collectionRouter.put(
	'/productInCollection',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	collectionController.addProductInCollection
);
collectionRouter.put(
	'/deleteProduct',
	authMiddleware(['ADMIN', 'MAIN_ADMIN']),
	collectionController.deleteProductFromCollection
);

collectionRouter.get(
	'/collections',
	collectionController.getCollections
);
collectionRouter.get('/collection', collectionController.getCollection);

export default collectionRouter;
