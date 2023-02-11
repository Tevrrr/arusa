/** @format */

import mongoose from 'mongoose';

export interface IRole{
    value:string
}

export const RoleType = {
	value: { type: String, unique: true, required: true },

};
const RoleSchema = new mongoose.Schema<IRole>(RoleType);
const Role = mongoose.model<IRole>('Role', RoleSchema);
export default Role;
