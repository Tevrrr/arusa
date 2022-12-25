import type { NextPage } from 'next'
import MainContainer, { textColor } from '../../components/MainContainer';
import { AiOutlineSearch } from 'react-icons/ai';
import ProductCard from '../../components/ProductCard';
const Shop: NextPage = () => {

    return (
		<MainContainer title='Shop' color={textColor.dark} emailForm={false}>
			<h1 className=' mt-14 p-2 text-center border-y border-oyster'>
				All
			</h1>
			<div className='flex justify-center border-b border-oyster'>
				<div className=' max-w-screen-xl w-full flex items-center justify-between md:pl-44 lg:pl-72'>
					<p className='Regular w-1/2 md:w-auto pt-10 p-3 uppercase'>
						21 products
					</p>
					<p className='Regular w-1/2 md:w-auto flex items-center  border-l md:border-0 border-oyster pt-10 p-3'>
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
					<div className='flex flex-row md:flex-col w-44 lg:w-72 uppercase border-r border-oyster'>
						<p className='Regular lg:pl-20 p-5 border-b border-oyster'>
							Filters
						</p>
						<div className=' hidden md:flex flex-col gap-4 lg:pl-20 p-5 border-b border-oyster text-ash'>
							<p className='Regular cursor-pointer'>Decirs</p>
							<p className='Regular cursor-pointer'>Ceramics</p>
							<p className='Regular cursor-pointer'>Chairs</p>
							<p className='Regular cursor-pointer'>Lamp</p>
						</div>
						<p className='Regular lg:pl-20 p-5 border-b border-oyster'>
							Sort by
						</p>
						<div className=' hidden md:flex flex-col gap-4 lg:pl-20 p-5 text-ash'>
							<p className='Regular cursor-pointer'>
								Price: low to high
							</p>
							<p className='Regular cursor-pointer'>
								Price: high to low
							</p>
							<p className='Regular cursor-pointer'>A-Z</p>
							<p className='Regular cursor-pointer'>Z-A</p>
							<p className='Regular cursor-pointer'>
								Best selling
							</p>
						</div>
					</div>
					<div className=' grow flex gap-0 justify-center'>
						<div className=' max-w-screen-xl w-full flex flex-wrap justify-between'>
							{[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
								return (
									<ProductCard
										className=' !p-4 last:!max-w-fit !min-w-[50%] lg:!min-h-[620px]'
										key={i}
										title={item.toString()}
										price={'$' + item.toString()}
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