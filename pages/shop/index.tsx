import type { NextPage } from 'next'
import MainContainer, { textColor } from '../../components/MainContainer/MainContainer';
import { AiOutlineSearch } from 'react-icons/ai';
import ProductCard from '../../components/ProductCard';
import SortPanel from '../../components/Shop/SortPanel';
const Shop: NextPage = () => {

    return (
		<MainContainer title='Shop' emailForm={false}>
			<h1 className=' mt-14 p-2 text-center border-y border-oyster'>
				All
			</h1>
			<div className='flex justify-center border-b border-oyster'>
				<div className=' max-w-screen-xl w-full flex justify-between md:pl-44 lg:pl-72'>
					<p className='TextRegular flex items-center w-1/2 md:w-auto pt-10 p-3 uppercase border-r md:border-0 border-oyster'>
						21 products
					</p>
					<p className='TextRegular w-1/2 md:w-auto flex items-center  pt-10 p-3'>
						<input
							className=' grow md:grow-0 md:w-40 p-1'
							type='text'
							placeholder='SEARCH'
						/>
						<AiOutlineSearch className=' text-xl' />
					</p>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className=' max-w-screen-xl w-full xl:border-x border-oyster flex flex-col md:flex-row'>
					<SortPanel/>
					<div className=' grow flex gap-0 justify-center'>
						<div className=' max-w-screen-xl w-full flex flex-wrap justify-between'>
							{[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
								return (
									<ProductCard
										className=' !p-4 last:!max-w-fit !min-w-[50%] lg:!min-h-[620px]'
										key={i}
										title={item.toString()}
										price={item.toString()}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}

export default Shop;