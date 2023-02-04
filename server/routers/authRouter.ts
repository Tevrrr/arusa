/** @format */

import { Router } from 'express';
import { check } from 'express-validator';
import authController from '../controllers/authController';
import authMiddleware from '../middleware/authMiddleware';

const authRouter = Router();

authRouter.post(
	'/registration',
	[check('username', 'Username cannot be empty').notEmpty()],
	[
		check(
			'password',
			'Password cannot be shorter than 4 and longer than 10 characters'
		).isLength({ max: 10, min: 4 }),
	],
	authController.registration
);
authRouter.post('/login', authController.login);
authRouter.get('/login',authMiddleware(), authController.loginByToken);

export default authRouter;
