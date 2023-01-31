/** @format */

import { Request, Response } from 'express';
import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Role from '../models/Role';
import User from '../models/User';
import { validationResult } from 'express-validator/src/validation-result';
import findSecretKey from '../../common/helpers/findSecretKey';

const generationAccessToken = (id:string, roles: string[]) => {
    const payload = { id, roles };
    const secretKey = findSecretKey();
    
    return sign(payload, secretKey, {expiresIn: '24h'});
}

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
			const userFind = await User.findOne({ username });
			if (userFind) {
				return res
					.status(400)
					.json({ message: 'Such a user already exists' });
            }
            
			const hashPassword = hashSync(password, 5);
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
			const { username, password } = req.body;
			const user = await User.findOne({ username });
			if (!user) {
				return res.status(400).json({ message: 'User not found' });
            }
            
			const validPassword = compareSync(password, user.password);
			if (!validPassword) {
				return res.status(400).json({ message: 'Wrong password' });
            }
            const token = generationAccessToken(user.id, user.roles);
            res.status(200).json({token})
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Login error' });
		}
	}
}

export default new authController();
