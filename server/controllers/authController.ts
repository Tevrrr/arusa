/** @format */

import { Request, Response } from 'express';
import { validationResult } from 'express-validator/src/validation-result';
import authService from '../services/authService';
import userService from '../services/userService';

class authController {
	async registration(req: Request, res: Response) {
		try {
			const error = validationResult(req);
			if (!error.isEmpty()) {
				return res
					.status(400)
					.json({ message: 'Registration error', error });
			}

			const { username, password, role } = req.body;
			const { errorMessage } = await authService.registration(
				username,
				password,
				role
			);
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			return res
				.status(200)
				.json({ message: 'User successfully registered' });
		} catch (error) {
			console.log(error);
			return res.status(400).json({ message: 'Registration error' });
		}
	}
	async login(req: Request, res: Response) {
		try {
			const { username, password } = req.body;
			const { user, token, errorMessage } = await authService.login(
				username,
				password
			);
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			if (!user) {
				return res.status(400).json({ message: 'Login error' });
			}
			return res.status(200).json({
				user: { username: user.username, roles: user.roles, _id: user._id },
				token,
			});
		} catch (error) {
			console.log(error);
			return res.status(400).json({ message: 'Login error' });
		}
	}
	async loginByToken(req: Request, res: Response) {
		try {
			const { id } = req.body.user;
			const { user, errorMessage } = await userService.getUser(id);
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			if (!user) {
				return res.status(400).json({ message: 'loginByToken error' });
			}
			return res.status(200).json({
				username: user.username,
				roles: user.roles,
			});
		} catch (error) {
			console.log(error);
			return res.status(400).json({ message: 'loginByToken error' });
		}
	}
}

export default new authController();
