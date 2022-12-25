import type { NextPage } from 'next'
import { useState } from 'react';

interface SortPanelProps {};

const SortPanel: NextPage<SortPanelProps> = () => {
    	const [filters, setFilters] = useState(false);
		const [sortBy, setSortBy] = useState(false);

		const filtersToggle = (): void => {
			setFilters(!filters);
			setSortBy(false);
		};
		const sortByToggle = (): void => {
			setSortBy(!sortBy);
			setFilters(false);
		};

    return (
		<div className='uppercase md:w-44 lg:w-72 flex flex-wrap flex-row md:flex-col border-b md:border-b-0 md:border-r border-oyster'>
			<p
				onClick={filtersToggle}
				className='Regular w-1/2 md:w-full cursor-pointer md:cursor-auto lg:pl-20 p-5 border-r md:border-b md:border-r-0 border-oyster'>
				Filters
			</p>
			<div
                className={`order-1 md:order-0 w-full md:flex flex-col gap-4 lg:pl-20 p-5 
                            border-t md:border-t-0 md:border-b border-oyster text-ash hidden    
                            ${!filters || '!flex '}`}>
				<p className='Regular cursor-pointer'>Decirs</p>
				<p className='Regular cursor-pointer'>Ceramics</p>
				<p className='Regular cursor-pointer'>Chairs</p>
				<p className='Regular cursor-pointer'>Lamp</p>
			</div>
			<p
				onClick={sortByToggle}
				className='Regular cursor-pointer md:cursor-auto w-1/2 md:w-full lg:pl-20 p-5 md:border-b border-oyster'>
				Sort by
			</p>
			<div
                className={`w-full md:flex flex-col gap-4 lg:pl-20 p-5 text-ash
                            border-t md:border-t-0 border-oyster hidden
                            ${!sortBy || '!flex '}`}>
				<p className='Regular cursor-pointer'>Price: low to high</p>
				<p className='Regular cursor-pointer'>Price: high to low</p>
				<p className='Regular cursor-pointer'>A-Z</p>
				<p className='Regular cursor-pointer'>Z-A</p>
				<p className='Regular cursor-pointer'>Best selling</p>
			</div>
		</div>
	);
}

export default SortPanel;