/** @format */

import mongoose from 'mongoose';

export const FilterType = {
	value: { type: String, unique: true, required: true },
};
const FilterSchema = new mongoose.Schema(FilterType);
const Filter = mongoose.model('Filter', FilterSchema);
export default Filter;
