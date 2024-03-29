/** @format */

import type { NextPage } from 'next';
import ProductCard from '../ProductCard';
import { useContext } from 'react';
import { ProductContext } from '../../common/ProductProvider';
import { IProduct } from '../../common/types/product';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { SpinnerDotted } from 'spinners-react';
import { Colors } from '../../common/types/colors';

interface ProductPanelProps {
	data?: IProduct[];
}

const ProductPanel: NextPage<ProductPanelProps> = ({ data }) => {
	const {
		products,
		addNextProducts,
		countProductsFound,
		productQuantity,
		loading,
	} = useContext(ProductContext);
	return (
		<div className=' max-w-screen-xl w-full flex flex-wrap justify-between'>
			{loading === 'success' ? (
				<div className='w-full flex flex-wrap justify-between'>
					{(data || products).map((item) => {
						return (
							<ProductCard
								className=' !p-4 odd:last:border-b-0 last:!max-w-[50%]  lg:!min-h-[620px]'
								key={item._id}
								data={item}
							/>
						);
					})}
				</div>
			) : (
				<></>
			)}
			{loading === 'loading' ? (
				<div className='w-full flex flex-wrap justify-center '>
					<SpinnerDotted color={Colors.opal} />
				</div>
			) : (
				<></>
			)}


			{countProductsFound === productQuantity || (
				<div className=' w-full grow flex p-5 justify-center border-t border-oyster'>
					<button className='SecondaryBtn' onClick={addNextProducts}>
						<AiOutlineCloudDownload size={20} /> Download next
					</button>
				</div>
			)}
		</div>
	);
};

export default ProductPanel;
