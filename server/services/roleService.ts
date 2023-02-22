/** @format */

import { IUser } from '../models/User';
import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Role from '../models/Role';
import User from '../models/User';
import findSecretKey from '../../common/helpers/findSecretKey';



interface IRoleResult {
	roles?: string[];

	errorMessage?: string;
}

class RoleService {
	async getRoles(): Promise<IRoleResult> {
		try {
            const roles = await Role.find();
            const result = roles.map(item => item.value)
			return { roles: result };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Login error' };
		}
	}
}

export default new RoleService();
