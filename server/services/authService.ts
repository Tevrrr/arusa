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

interface IFilterResult {
	user?: IUser;
	token?: string;
	errorMessage?: string;
}

class authService {
	async registration(
		username: string,
		password: string,
		role: string
    ): Promise<IFilterResult> {
        try {const userFind = await User.findOne({ username });
		if (userFind) {
			return {errorMessage:'Such a user already exists'};
		}

		const hashPassword = hashSync(password, 5);
		const userRole = await Role.findOne({ value: role });
		if (!userRole) {
			return {errorMessage:'There is no such role'};
		}

		const user = await User.create({
			username,
			password: hashPassword,
			roles: [userRole.value],
		});
		return {user};
            
        } catch (error) {
            console.log(error)
            return { errorMessage: 'Registration error' };
        }
		
	}
    async login(username: string, password: string): Promise<IFilterResult> {
        try {
            const user = await User.findOne({ username });
		if (!user) {
			return {errorMessage:'User not found'};
		}

		const validPassword = compareSync(password, user.password);
		if (!validPassword) {
			return {errorMessage:'Wrong password'};
		}
		const token = generationAccessToken(user.id, user.roles);
		return { user, token };
        } catch (error) {
            console.log(error);
			return { errorMessage: 'Login error' };
        }
		
	}
}

export default new authService();
