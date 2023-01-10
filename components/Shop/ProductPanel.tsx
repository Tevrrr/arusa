/** @format */

import type { NextPage } from 'next';
import ProductCard from '../ProductCard';
import { useContext } from 'react';
import { ProductContext } from '../../common/ProductProvider';

const ProductPanel: NextPage = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className=' max-w-screen-xl w-full flex flex-wrap justify-between'>
			{products.map((item) => {
				return (
					<ProductCard
						className=' !p-4 last:!max-w-[50%] !min-w-[50%] lg:!min-h-[620px]'
						key={item.id}
						src={item.images[0]}
						title={item.title}
						price={item.price.toString()}
					/>
				);
			})}
		</div>
	);
};

export default ProductPanel;
