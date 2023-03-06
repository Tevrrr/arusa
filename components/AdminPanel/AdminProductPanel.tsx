/** @format */

import type { NextPage } from 'next';
import { useContext } from 'react';
import { ProductContext } from '../../common/ProductProvider';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import AdminProductCard from './AdminProductCard';
import { SpinnerDotted } from 'spinners-react';
import { Colors } from '../../common/types/colors';

const AdminProductPanel: NextPage = () => {
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
					{products.map((item) => {
						return (
							<AdminProductCard
								className=' '
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
				<div className='w-full flex flex-wrap justify-center items-center'>
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

export default AdminProductPanel;
