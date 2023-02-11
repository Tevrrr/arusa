/** @format */

import mongoose from 'mongoose';

export interface IUser {
	username: string;
	password: string;
	roles: string[];
}

export const UserType = {
	username: { type: String, unique:true, required: true },
    password: { type: String, required: true },
    roles: [{type: String, ref: 'Role'}]

};
const UserSchema = new mongoose.Schema<IUser>(UserType);
const User = mongoose.model<IUser>('User', UserSchema);
export default User;
