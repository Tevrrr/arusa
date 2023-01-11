/** @format */

import type { NextPage } from 'next';
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { IProductProvider } from './types/ProductContext';
import { IProduct } from './types/product';
import { getProductsByFilter, getProductsByQuery } from '../service';

interface ProductProviderProps {
	children: ReactNode;
}

const initialState: IProductProvider = {
	products: [],
	filters: [],
	sortBy: 'A-Z',
	searchQuery: '',
	productQuantity: 0,
	setSearchQuery: (value: string) => {},
	sortByToggle: (value: string) => {},
	filterToggle: (value: string) => {},
};

export const ProductContext = createContext<IProductProvider>(initialState);

export const ProductProvider: NextPage<ProductProviderProps> = ({
	children,
}) => {
	const [filters, setFilters] = useState<string[]>([]);
	const [activeSortBy, setActiveSortBy] = useState('A-Z');
	const [searchQuery, setSearchQuery] = useState('');
	const [productQuantity, setProductQuantity] = useState(0);

	const products = useMemo<IProduct[]>(() => {
		if (searchQuery) {
			return getProductsByQuery(searchQuery, activeSortBy);
		}
		return getProductsByFilter(filters, activeSortBy);
	}, [filters, activeSortBy, searchQuery]);

	useEffect(() => {
		setProductQuantity(products.length);
	}, [products]);

	const sortByToggle = (value: string) => {
		if (activeSortBy === value) {
			return;
		}
		setActiveSortBy(value);
	};

	const filterToggle = (value: string) => {
		if (!filters.includes(value)) {
			setFilters([...filters, value]);
			return;
		}

		const activeFilterPosition = filters.indexOf(value);

		setFilters(filters.filter((item, i) => i != activeFilterPosition));
	};
	return (
		<ProductContext.Provider
			value={{
				products,
				productQuantity,
				filters,
				searchQuery,
				setSearchQuery,
				sortBy:activeSortBy,
				sortByToggle,
				filterToggle,
			}}>
			{children}
		</ProductContext.Provider>
	);
};
