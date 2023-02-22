/** @format */

import { Request, Response } from 'express';
import roleService from '../services/roleService';

class authController {
	async getRoles(req: Request, res: Response) {
		try {

			const { roles, errorMessage } = await roleService.getRoles();
			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			return res.status(200).json(roles);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ message: 'Registration error' });
		}
	}


}

export default new authController();
