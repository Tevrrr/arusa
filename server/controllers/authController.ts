/** @format */

import { Request, Response } from 'express';
import {hashSync} from 'bcryptjs';
import Role from '../models/Role';
import User from '../models/User';
import { validationResult } from 'express-validator/src/validation-result';

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
            const userFind = await User.findOne({ username })
            if (userFind) {
                return res
					.status(400)
					.json({ message: 'Such a user already exists' });
            }
            const hashPassword = hashSync(password, 5)
            const userRole = await Role.findOne({ value: role });
            if (!userRole) {
				return res
					.status(400)
					.json({ message: 'There is no such role' });
			}
			const user = await User.create({
				username,
				password: hashPassword,
				roles: [userRole.value],
            });
            res.status(200).json({ message: 'User successfully registered' });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Registration error' });
		}
	}
	async login(req: Request, res: Response) {
		try {
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Login error' });
		}
	}
}

export default new authController();
