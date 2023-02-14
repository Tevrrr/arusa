/** @format */

import type { NextPage } from 'next';
import { useContext } from 'react';
import { BagContext } from '../../common/BagProvider';
import BagItem from './BagItem';
import Link from 'next/link';

interface BagProps {}

const Bag: NextPage<BagProps> = () => {
	const { products, totalPrice } = useContext(BagContext);

	return (
		<div className=' w-full h-full flex flex-col '>
			<h5 className=' hidden md:block uppercase'>Order summary</h5>
			<p className=' md:hidden TextRegular uppercase'>Order summary</p>

			<div className=' grow flex flex-col gap-2 overflow-y-auto my-3'>
				{products.map((item) => {
					return <BagItem product={item} key={item._id} />;
				})}
			</div>
			<div className='flex justify-between items-center border-y border-oyster py-3'>
				<p className='TextRegular uppercase'>Grand tota incl. tax</p>
				<p className='Caption font-bold'>${totalPrice}</p>
			</div>
			<div className=' flex flex-col-reverse md:flex-row gap-2 py-4 '>
				<Link href='/shop' className=' md:grow'>
					<button className='OutlinedBtn w-full uppercase'>
						Continue shopping
					</button>
				</Link>
				<Link href='/orderForm' className=' md:grow'>
					<button className='SecondaryBtn w-full uppercase'>
						Proceed checkout
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Bag;
