/** @format */

import mongoose from 'mongoose';

export const CollectionType = {
	name: { type: String, unique: true, required: true },
	filter: { type: String, ref: 'Filter', required: true },
	image: { type: String, required: true },
};
const CollectionSchema = new mongoose.Schema(CollectionType);
const Collection = mongoose.model('Collection', CollectionSchema);
export default Collection;
