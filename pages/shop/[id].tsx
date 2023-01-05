import type { NextPage } from 'next'
import MainContainer from '../../components/MainContainer/MainContainer';

interface ProductProps {};

const Product: NextPage<ProductProps> = () => {

    return (
		<MainContainer title='{Product}' emailForm={false}>
			<div className='pt-14 flex justify-center'>
				<div className=' max-w-screen-xl w-full flex'>
					<div className='w-1/2 h-[500px] bg-smoke'></div>
					<div className='grow flex justify-center items-center'>
						<div className=' max-w-lg  flex flex-col gap-4 text-opal'>
							<h3 className=' text-stormy'>Keala</h3>
							<p className='TextRegular uppercase text-stormy'>
								Triple wardrobe, mango wood
							</p>
							<p className='TextRegular'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Non
								pulvinar neque laoreet suspendisse. A arcu
								cursus vitae congue. Suscipit tellus mauris a
								diam maecenas sed enim ut sem. Dictum non
								consectetur a erat nam.
							</p>
							<div className='flex justify-between items-center'>
								<p className='TextLarge'>$4.990</p>
								<p className='TextRegular uppercase'>
									Size guide
								</p>
							</div>
							<div className='flex justify-between gap-1'>
								<button className='OutlinedBtn py-1 grow'>
									<p className='TextSmall'>40x40</p>
								</button>
								<button className='OutlinedBtn py-1 grow'>
									<p className='TextSmall'>80x80</p>
								</button>
								<button className='OutlinedBtn py-1 grow'>
									<p className='TextSmall'>100x100</p>
								</button>
								<button className='OutlinedBtn py-1 grow'>
									<p className='TextSmall'>120x120</p>
								</button>
							</div>
							<button className='SecondaryBtn uppercase'>
								Add to bag
							</button>
							<div className='flex'>
								<button className='OutlinedBtn py-1 grow rounded-r-none'>
									<p className='TextSmall uppercase'>
										g Description
									</p>
								</button>
								<button className='OutlinedBtn py-1 grow rounded-none !border-x-0'>
									<p className='TextSmall uppercase'>
										Description
									</p>
								</button>
								<button className='OutlinedBtn py-1 grow rounded-l-none'>
									<p className='TextSmall uppercase'>
										Description
									</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}

export default Product;