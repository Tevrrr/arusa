/** @format */

import mongoose from 'mongoose';

export const UserType = {
	username: { type: String, unique:true, required: true },
    password: { type: String, required: true },
    roles: [{type: String, ref: 'Role'}]

};
const UserSchema = new mongoose.Schema(UserType);
const User = mongoose.model('User', UserSchema);
export default User;
