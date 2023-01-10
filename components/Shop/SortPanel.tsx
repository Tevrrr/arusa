/** @format */

import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import { ProductContext } from '../../common/ProductProvider';

interface SortPanelProps {
	filters: string[];
}

const SortPanel: NextPage<SortPanelProps> = ({ filters }) => {
	const [filterPanel, setFilterPanel] = useState(false);
    const [sortByPanel, setSortByPanel] = useState(false);
    const { filters: activeFilters, sortBy: activeSortBy, filterToggle,sortByToggle } =
		useContext(ProductContext);


	const sortBy = [
		'Price: low to high',
		'Price: high to low',
		'A-Z',
		'Z-A',
		'Best selling',
	];
	<p className='TextRegular cursor-pointer'></p>;

	const filterPanelToggle = (): void => {
		setFilterPanel(!filterPanel);
		setSortByPanel(false);
	};
	const sortByPanelToggle = (): void => {
		setSortByPanel(!sortByPanel);
		setFilterPanel(false);
    };
    const clickFilterItem = (value:string):()=>void => {
        return () => {
            filterToggle(value)
        }
    }
    const clickSortByItem = (value: string): (() => void) => {
		return () => {
			sortByToggle(value);
		};
	};


	return (
		<div className='uppercase md:w-44 lg:w-72 flex flex-wrap flex-row md:flex-col border-b md:border-b-0 md:border-r border-oyster'>
			<p
				onClick={filterPanelToggle}
				className='TextRegular w-1/2 md:w-full cursor-pointer md:cursor-auto lg:pl-20 p-5 border-r md:border-b md:border-r-0 border-oyster'>
				FilterPanel
			</p>
			<div
				className={`order-1 md:order-0 w-full md:flex flex-col gap-4 lg:pl-20 p-5 
                            border-t md:border-t-0 md:border-b border-oyster text-ash hidden    
                            ${!filterPanel || '!flex '}`}>
				{filters.map((item, i) => (
					<p
						key={item + i}
						className={`TextRegular cursor-pointer 
                        ${activeFilters.includes(item) ? ' text-stormy' : ''}`}
						onClick={clickFilterItem(item)}>
						{item}
					</p>
				))}
			</div>
			<p
				onClick={sortByPanelToggle}
				className='TextRegular cursor-pointer md:cursor-auto w-1/2 md:w-full lg:pl-20 p-5 md:border-b border-oyster'>
				Sort by
			</p>
			<div
				className={`w-full md:flex flex-col gap-4 lg:pl-20 p-5 text-ash
                            border-t md:border-t-0 border-oyster hidden
                            ${!sortByPanel || '!flex '}`}>
				{sortBy.map((item, i) => (
					<p
						key={item + i}
						className={`TextRegular cursor-pointer 
                        ${item === activeSortBy ? ' text-stormy' : ''}`}
						onClick={clickSortByItem(item)}>
						{item}
					</p>
				))}
			</div>
		</div>
	);
};

export default SortPanel;
