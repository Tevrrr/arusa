/** @format */

import mongoose from 'mongoose';
export interface IFilter{
    value: string
}
export const FilterType = {
	value: { type: String, unique: true, required: true },
};
const FilterSchema = new mongoose.Schema<IFilter>(FilterType);
const Filter = mongoose.model<IFilter>('Filter', FilterSchema);
export default Filter;
