/** @format */

import type { NextPage } from 'next';
import ProductCard from '../ProductCard';
import { useContext } from 'react';
import { ProductContext } from '../../common/ProductProvider';
import { IProduct } from '../../common/types/product';


interface ProductPanelProps {
	data?: IProduct[];
}

const ProductPanel: NextPage<ProductPanelProps> = ({ data }) => {
	const { products } = useContext(ProductContext);
	return (
		<div className=' max-w-screen-xl w-full flex flex-wrap justify-between'>
			{(data || products).map((item) => {
				return (
					<ProductCard
						className=' !p-4 last:!max-w-[50%]  lg:!min-h-[620px]'
						key={item.id}
						data={item}
					/>
				);
			})}
		</div>
	);
};

export default ProductPanel;
