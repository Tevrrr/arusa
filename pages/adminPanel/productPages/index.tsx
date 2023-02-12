/** @format */

import type { NextPage } from 'next';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { IProductPage } from '../../../common/types/product';
import { useContext, useState } from 'react';
import { UserContext } from '../../../common/UserProvider';
import { ProductProvider } from '../../../common/ProductProvider';
import { FILTERS } from '../../../common/helpers/consts';
import { AiFillFileAdd } from 'react-icons/ai';
import SearchPanel from '../../../components/Shop/SearchPanel';
import SortPanel from '../../../components/Shop/SortPanel';
import AdminProductPanel from '../../../components/AdminPanel/AdminProductPanel';
import Link from 'next/link';

const ProductPage: NextPage = () => {
	const [newProductPage, setNewProductPage] = useState<IProductPage>();
	const { token } = useContext(UserContext);



	return (
		<MainAdminContainer title='Product pages'>
			<ProductProvider limit={20}>
				<div className='flex justify-center border-b border-oyster mt-10'>
					<SearchPanel />
				</div>

				<div className='mx-auto max-w-screen-xl w-full xl:border-x border-oyster flex flex-col md:flex-row'>
					<SortPanel filters={FILTERS} />
					<div className=' grow flex flex-col gap-0 justify-center'>
						<Link
							href='/adminPanel/productPages/addPage'
							className='w-full flex p-4 gap-4'>
							<div className=' w-56 h-56 relative shrink-0 bg-linen text-opal flex justify-center items-center'>
								<AiFillFileAdd size={50} />
							</div>
							<div className='flex justify-center items-center grow text-center'>
								<h5>Create a new product page</h5>
							</div>
                        </Link>
                        <div className='grow'></div>
						<AdminProductPanel />
					</div>
				</div>
			</ProductProvider>
		</MainAdminContainer>
	);
};

export default ProductPage;
