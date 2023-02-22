/** @format */

import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import roleController from '../controllers/roleController';

const roleRouter = Router();

roleRouter.get(
	'/roles',
	authMiddleware(['MAIN_ADMIN']),
	roleController.getRoles
);

export default roleRouter;


