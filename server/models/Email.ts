/** @format */

import mongoose from 'mongoose';

export interface IEmail {
	_id: string;
	email: string;

}

export const EmailType = {
	email: { type: String, unique: true, required: true },
};
const EmailSchema = new mongoose.Schema<IEmail>(EmailType);
const Email = mongoose.model<IEmail>('Email', EmailSchema);
export default Email;
