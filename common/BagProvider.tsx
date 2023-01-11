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
	incrementProductCount: (id: number) => {},
	decrementProductCount: (id: number) => {},
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
		console.log(totalPrice);
	}, [products]);

	const addProduct = (product: IProduct) => {
		setProducts([...products, { ...product, count: 1 }]);
	};

    const incrementProductCount = (id: number) => {
        setProducts(products.map((item) => {
            if (item.id !== id) return item;
            return { ...item, count: item.count + 1 };
        }))
    };

    const decrementProductCount = (id: number) => {
        
		setProducts(
			products.map((item) => {
				if (item.id !== id) return item;
				return { ...item, count: item.count - 1 };
			})
		);
	};

	return (
		<BagContext.Provider
			value={{ products, count, totalPrice, addProduct, decrementProductCount, incrementProductCount }}>
			{children}
		</BagContext.Provider>
	);
};

export default BagProvider;
