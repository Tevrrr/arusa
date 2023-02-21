/** @format */

import { IFilter } from './../models/Filter';
import Filter from '../models/Filter';

interface IFilterResult {
	filters?: string[];
	filter?: IFilter;
	errorMessage?: string;
}

class filterService {
	async getFilters(): Promise<IFilterResult> {
		try {
			const filters = await Filter.find({});
			const result = filters.map((item) => item.value);
			return { filters: result };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Get filters error' };
		}
	}
	async addFilter(value: string): Promise<IFilterResult> {
		try {
			const newFilter = await Filter.create({
				value,
			});
			return { filter: newFilter };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Add filter error' };
		}
	}
	async updateFilter(id: string, filter: IFilter): Promise<IFilterResult> {
		try {
			const updatedFilter = await Filter.findByIdAndUpdate(id, filter, {
				new: true,
            });
            if (!updatedFilter) {
                return { errorMessage: 'Filter not found' };
            }
            return {filter: updatedFilter};
        } catch (error) {
            console.log(error);
			return { errorMessage: 'Update filter error' };
        }
	}
}

export default new filterService();
