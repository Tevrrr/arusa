/** @format */

import { Request, Response } from 'express';
import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Role from '../models/Role';
import User from '../models/User';
import { validationResult } from 'express-validator/src/validation-result';
import findSecretKey from '../../common/helpers/findSecretKey';
import authService from '../services/authService';

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
			const result = await authService.registration(
				username,
				password,
				role
			);
			if (typeof result === 'string') {
				return res.status(400).json({ message: result });
			}
			res.status(200).json({ message: 'User successfully registered' });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Registration error' });
		}
	}
	async login(req: Request, res: Response) {
		try {
			const { username, password } = req.body;
			const result = await authService.login(username, password);
			if (typeof result === 'string') {
				return res.status(400).json({ message: result });
            }
            
			const { user, token } = result;
			res.status(200).json({
				user: { username: user.username, roles: user.roles },
				token,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Login error' });
		}
	}
	async loginByToken(req: Request, res: Response) {
		try {
			const user = req.body.user;

			res.status(200).json({
				user: { username: user.username, roles: user.roles },
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'loginByToken error' });
		}
	}
}

export default new authController();
