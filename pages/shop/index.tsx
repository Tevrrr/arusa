/** @format */

import type { NextPage } from 'next';
import MainContainer from '../../components/MainContainer/MainContainer';
import SortPanel from '../../components/Shop/SortPanel';
import { ProductProvider } from '../../common/ProductProvider';
import ProductPanel from '../../components/Shop/ProductPanel';
import SearchPanel from '../../components/Shop/SearchPanel';
import { FILTERS } from '../../common/helpers/consts';

const Shop: NextPage = () => {
	return (
		<MainContainer title='Shop' emailForm={false}>
			<ProductProvider>
				<h1 className=' mt-14 p-2 text-center border-y border-oyster'>
					All
				</h1>
				<div className='flex justify-center border-b border-oyster'>
					<SearchPanel />
				</div>
				<div className='flex justify-center'>
					<div className=' max-w-screen-xl w-full xl:border-x border-oyster flex flex-col md:flex-row'>
						<SortPanel filters={FILTERS} />
						<div className=' grow flex gap-0 justify-center'>
							<ProductPanel />
						</div>
					</div>
				</div>
			</ProductProvider>
		</MainContainer>
	);
};

export default Shop;
