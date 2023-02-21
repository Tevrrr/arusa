/** @format */

import { Request, Response } from 'express';
import filterService from '../services/filterService';

class filterController {
	async getFilters(req: Request, res: Response) {
		try {
            const { filters, errorMessage } = await filterService.getFilters();
            if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			res.status(200).json( filters );
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
            
            const {errorMessage, filter} = await filterService.addFilter(value);
            if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}
			res.status(200).json(filter);
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
            
            const { errorMessage, filter: updatedFilter } =
				await filterService.updateFilter(filter.id, filter);
            if (errorMessage) {
				return res.status(400).json({ message: errorMessage });
			}

			res.status(200).json(updatedFilter);
		} catch (error) {
			console.log(error);
			res.status(400).send('update filter error');
		}
	}
}

export default new filterController();
