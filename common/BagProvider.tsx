/** @format */

import type { NextPage } from 'next';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { IBagContext, IBagItem } from './types/BagContext';
import { IProduct } from './types/product';

const initialState: IBagContext = {
	products: [],
	count: 0,
	totalPrice: 0,
	addProduct: (product: IProduct) => {},
	removeProduct: (id: string) => {},
	incrementProductCount: (id: string) => {},
	decrementProductCount: (id: string) => {},
	emptyBag: () => {},
};

export const BagContext = createContext<IBagContext>(initialState);

interface BagProviderProps {
	children: ReactNode;
}

const BagProvider: NextPage<BagProviderProps> = ({ children }) => {
	const [products, setProducts] = useState<IBagItem[]>([]);
	const [count, setCount] = useState(products.length);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let totalPrice = 0;
		products.map((item) => {
			totalPrice = totalPrice + item.count * item.price;
		});
		setCount(products.length);
		setTotalPrice(totalPrice);
	}, [products]);

	const addProduct = (product: IProduct) => {
		if (products.find((item) => product._id === item._id)) return;
		setProducts([...products, { ...product, count: 1 }]);
	};

	const removeProduct = (id: string) => {
		setProducts(products.filter((item) => item._id !== id));
	};

	const incrementProductCount = (id: string) => {
		setProducts(
			products.map((item) => {
				if (item._id !== id) return item;
				return { ...item, count: item.count + 1 };
			})
		);
	};

	const decrementProductCount = (id: string) => {
		setProducts(
			products.map((item) => {
				if (item._id !== id) return item;
				return { ...item, count: item.count - 1 };
			})
		);
	};
    const emptyBag = () => {
        setProducts([])
    }

	return (
		<BagContext.Provider
			value={{
				products,
				count,
				totalPrice,
				addProduct,
				removeProduct,
				decrementProductCount,
				incrementProductCount,
				emptyBag,
			}}>
			{children}
		</BagContext.Provider>
	);
};

export default BagProvider;
