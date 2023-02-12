/** @format */

import { IFilter } from './../models/Filter';
/** @format */

import { Request, Response } from 'express';
import Filter from '../models/Filter';

class filterService {
	async getFilters(): Promise<string[]> {
		const filters = await Filter.find({});
		return filters.map(item => item.value);
	}
	async addFilter(value: string): Promise<IFilter> {
		const newFilter = await Filter.create({
			value,
		});
		return newFilter;
	}
	async updateFilter(id: string, filter: IFilter): Promise<IFilter|null> {
		const updatedFilter = await Filter.findByIdAndUpdate(id, filter, {
			new: true,
		});
        return updatedFilter;
	}
}

export default new filterService();
