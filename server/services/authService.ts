/** @format */

import { IUser } from './../models/User';
import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Role from '../models/Role';
import User from '../models/User';

import findSecretKey from '../../common/helpers/findSecretKey';

const generationAccessToken = (id: string, roles: string[]) => {
	const payload = { id, roles };
	const secretKey = findSecretKey();

	return sign(payload, secretKey, { expiresIn: '24h' });
};

class authService {
	async registration(
		username: string,
		password: string,
		role: string
	): Promise<string | IUser> {
		const userFind = await User.findOne({ username });
		if (userFind) {
			return 'Such a user already exists';
		}

		const hashPassword = hashSync(password, 5);
		const userRole = await Role.findOne({ value: role });
		if (!userRole) {
			return 'There is no such role';
		}

		const user = await User.create({
			username,
			password: hashPassword,
			roles: [userRole.value],
		});
		return user;
	}
	async login(username: string, password: string): Promise<string | {user:IUser, token: string}> {
		const user = await User.findOne({ username });
		if (!user) {
			return 'User not found';
		}

		const validPassword = compareSync(password, user.password);
		if (!validPassword) {
			return 'Wrong password';
		}
        const token = generationAccessToken(user.id, user.roles);
        return {user, token}
	}
}

export default new authService();
