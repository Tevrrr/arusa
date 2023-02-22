/** @format */

import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
	async getUsers(req: Request, res: Response) {
		try {
			const { users, errorMessage } = await userService.getUsers();

			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}

			return res.status(200).json(users);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ message: 'Get users error' });
		}
	}
	async deleteUser(req: Request, res: Response) {
		try {
			const { id } = req.query;
			const { user: updatedUser, errorMessage } =
				await userService.deleteUser(id?.toString()||'');

			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			return res.status(200).json(updatedUser);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ message: 'Get users error' });
		}
	}
	async updateUser(req: Request, res: Response) {
		try {
			const { userUpdate } = req.body;
			const { user: updatedUser, errorMessage } =
				await userService.updateUser(userUpdate._id, userUpdate);

			if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			return res.status(200).json(updatedUser);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ message: 'Get users error' });
		}
	}
}

export default new UserController();
