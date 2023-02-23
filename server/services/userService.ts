import { IEmail } from './../models/Email';
/** @format */

import Email from "../models/Email";
import User from "../models/User";
import { IUser } from './../models/User';

interface IUserResult {
	user?: IUser;
	users?: IUser[];
	email?: IEmail;
	errorMessage?: string;
}

class UserService {
	async getUser(id: string): Promise<IUserResult> {
		try {
			const user = await User.findById(id);
			if (!user) {
				return { errorMessage: 'User not found' };
			}
			return { user };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Save file error' };
		}
	}
	async addEmail(email: string): Promise<IUserResult> {
        try {
			const findedEmail = await Email.find({ email });
			if (findedEmail.length) {
				return { errorMessage: 'This email is already subscribed' };
            }
            const newEmail = await Email.create({ email });
			return { email: newEmail };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Add email error' };
		}
	}
	async getUsers(): Promise<IUserResult> {
		try {
			const users = await User.find({});
			return { users };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Save file error' };
		}
	}
	async deleteUser(id: string): Promise<IUserResult> {
		try {
			const deletedUser = await User.findByIdAndDelete(id);
			if (!deletedUser) {
				return { errorMessage: 'User not found' };
			}
			return { user: deletedUser };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Save file error' };
		}
	}
	async updateUser(id: string, user: IUser): Promise<IUserResult> {
		try {
			const updatedUser = await User.findByIdAndUpdate(id, user, {
				new: true,
			});
			if (!updatedUser) {
				return { errorMessage: 'User not found' };
			}
			return { user: updatedUser };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Save file error' };
		}
	}
}
export default new UserService();
