/** @format */

import { Request, Response } from 'express';
import Filter from '../models/Filter';

class filterController {
	async getFilters(req: Request, res: Response) {
		try {
			const filters = await Filter.find({});
			res.status(200).json({ filters });
		} catch (error) {
			console.log(error);
			res.status(400).send('get filters error');
		}
	}
	async addFilter(req: Request, res: Response) {
		try {
            const { value } = req.body;
            if (!value) {
				return res
					.status(400)
					.send('You must specify a filter value!');
			}
			const newFilter = await Filter.create({
				value,
			});
			res.status(200).json(newFilter);
		} catch (error) {
			console.log(error);
			res.status(400).send('add filter error');
		}
	}
	async updateFilter(req: Request, res: Response) {
		try {
			const { filter } = req.body;
			if (!filter) {
				return res.status(400).send('You must specify the filter!');
			}
			const updatedOrderForm = await Filter.findByIdAndUpdate(
				filter.id,
				filter,
				{ new: true }
			);
			res.status(200).json(updatedOrderForm);
		} catch (error) {
			console.log(error);
			res.status(400).send('update filter error');
		}
	}
}

export default new filterController();
