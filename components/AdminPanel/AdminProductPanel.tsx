/** @format */

import type { NextPage } from 'next';
import { useContext } from 'react';
import { ProductContext } from '../../common/ProductProvider';
import { IProduct } from '../../common/types/product';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import AdminProductCard from './AdminProductCard';


interface AdminProductPanelProps {
	data?: IProduct[];
}

const AdminProductPanel: NextPage<AdminProductPanelProps> = ({ data }) => {
	const { products, addNextProducts, countProductsFound, productQuantity } =
		useContext(ProductContext);
    return (
		<div className=' max-w-screen-xl w-full flex flex-wrap justify-between'>
			<div className='w-full flex flex-wrap justify-between'>
				{(data || products).map((item) => {
					return (
						<AdminProductCard
							className=' '
							key={item.id}
							data={item}
						/>
					);
				})}
			</div>

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

export default AdminProductPanel;
