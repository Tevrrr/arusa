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
    countProductsFound: 0,
	addNextProducts: () => {},
	setSearchQuery: (value: string) => {},
	sortByToggle: (value: string) => {},
	filterToggle: (value: string) => {},
};

export const ProductContext = createContext<IProductProvider>(initialState);

export const ProductProvider: NextPage<ProductProviderProps> = ({
	children,
}) => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const [filters, setFilters] = useState<string[]>([]);
	const [activeSortBy, setActiveSortBy] = useState('A-Z');
	const [searchQuery, setSearchQuery] = useState('');
	const [productQuantity, setProductQuantity] = useState(0);
	const [countProductsFound, setCountProductsFound] = useState(0);

	useEffect(() => {
		if (searchQuery) {
			getProductsByQuery(searchQuery, activeSortBy, (products, count) => {
				setProducts(products);
				setCountProductsFound(count);
			},5)
		} else {
			getProductsByFilter(
				filters,
				activeSortBy,
				(products, count) => {
					setProducts(products);
					setCountProductsFound(count);
				},
				5
			);
		}
	}, [filters, activeSortBy, searchQuery]);

	useEffect(() => {
		setProductQuantity(products.length);
	}, [products]);

	const addNextProducts = () => {
		if (searchQuery) {
			getProductsByQuery(
				searchQuery,
				activeSortBy,
				(newProducts, count) => {
					setProducts([...products, ...newProducts]);
					setCountProductsFound(count);
				},
				5,
				productQuantity
			);
		} else {
			getProductsByFilter(
				filters,
				activeSortBy,
				(newProducts, count) => {
					setProducts([...products, ...newProducts]);
					setCountProductsFound(count);
				},
				5,
				productQuantity
			);
		}
	};

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
                countProductsFound,
				addNextProducts,
				setSearchQuery,
				sortBy: activeSortBy,
				sortByToggle,
				filterToggle,
			}}>
			{children}
		</ProductContext.Provider>
	);
};
