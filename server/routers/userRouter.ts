/** @format */
import { Router } from 'express';

import authMiddleware from '../middleware/authMiddleware';
import userController from '../controllers/userController';

const userRouter = Router();

userRouter.get(
	'/users',
	authMiddleware(['MAIN_ADMIN']),
	userController.getUsers
);
userRouter.put(
	'/user',
	authMiddleware(['MAIN_ADMIN']),
	userController.updateUser
);
userRouter.delete(
	'/user',
	authMiddleware(['MAIN_ADMIN']),
	userController.deleteUser
);

export default userRouter;