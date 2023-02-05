
/** @format */

export const SortBy = (sortBy: string): {} => {
	if (sortBy === 'Price: low to high') {
		return {price: 1};
	}
	if (sortBy === 'Price: high to low') {
		return { price: -1 };
	}
	if (sortBy === 'Best selling') {
		return { sellability: 1 };
	}
	if (sortBy === 'Z-A') {
		return { title: -1 };
	}

	return { title: 1 };
};
