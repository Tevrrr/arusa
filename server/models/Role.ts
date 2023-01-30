/** @format */

import mongoose from 'mongoose';

export const RoleType = {
	value: { type: String, unique: true, required: true },

};
const RoleSchema = new mongoose.Schema(RoleType);
const Role = mongoose.model('Role', RoleSchema);
export default Role;
