/** @format */

import type { NextPage } from 'next';
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { IProductProvider } from './types/ProductContext';
import { IProduct } from './types/product';
import {
	getProductsByQuery,
	getProductsByFilter,
} from '../service/getters/product';
import { Loading } from './types/loading';

interface ProductProviderProps {
	children: ReactNode;
	limit?: number;
}

const initialState: IProductProvider = {
	products: [],
	filters: [],
	loading: 'loading',
	sortBy: 'A-Z',
	searchQuery: '',
	productQuantity: 0,
	countProductsFound: 0,
	addNextProducts: () => {},
	updateProducts: () => {},
	setSearchQuery: (value: string) => {},
	sortByToggle: (value: string) => {},
	filterToggle: (value: string) => {},
};

export const ProductContext = createContext<IProductProvider>(initialState);

export const ProductProvider: NextPage<ProductProviderProps> = ({
	children,
	limit,
}) => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const [filters, setFilters] = useState<string[]>([]);
	const [activeSortBy, setActiveSortBy] = useState('A-Z');
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState<Loading>('loading');
	const [productQuantity, setProductQuantity] = useState(0);
	const [countProductsFound, setCountProductsFound] = useState(0);

	useEffect(() => {
		if (searchQuery) {
			setLoading('loading');
			getProductsByQuery(
				searchQuery,
				activeSortBy,
				(products, count) => {
					if (!products || !count) {
						setLoading('error');
						setProducts([]);
						setCountProductsFound(0);
						return;
					}
					setLoading('success');
					setProducts(products);
					setCountProductsFound(count);
				},
				limit || 5
			);
		} else {
			setLoading('loading');
			getProductsByFilter(
				filters,
				activeSortBy,
				(products, count) => {
					if (!products || !count) {
						setLoading('error');
						setProducts([]);
						setCountProductsFound(0);
						return;
					}
					setLoading('success');
					setProducts(products);
					setCountProductsFound(count);
				},
				limit || 5
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
                    if (!newProducts || !count) {
						setLoading('error');
						setProducts([]);
						setCountProductsFound(0);
						return;
					}
					setLoading('success');
					setProducts([...products, ...newProducts]);
					setCountProductsFound(count);
				},
				limit || 5,
				productQuantity
			);
		} else {
			getProductsByFilter(
				filters,
				activeSortBy,
                (newProducts, count) => {
                    if (!newProducts || !count) {
						setLoading('error');
						setProducts([]);
						setCountProductsFound(0);
						return;
					}
					setLoading('success');
					setProducts([...products, ...newProducts]);
					setCountProductsFound(count);
				},
				limit || 5,
				productQuantity
			);
		}
	};
	const updateProducts = () => {
		getProductsByQuery(
			searchQuery,
			activeSortBy,
            (products, count) => {
                if (!products || !count) {
					setLoading('error');
					setProducts([]);
					setCountProductsFound(0);
					return;
				}
				setLoading('success');
				setProducts(products);
				setCountProductsFound(count);
			},
			productQuantity
		);
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
				loading,
				searchQuery,
				countProductsFound,
				addNextProducts,
				setSearchQuery,
				updateProducts,
				sortBy: activeSortBy,
				sortByToggle,
				filterToggle,
			}}>
			{children}
		</ProductContext.Provider>
	);
};
