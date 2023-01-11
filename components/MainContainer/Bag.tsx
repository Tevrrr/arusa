/** @format */

import type { NextPage } from 'next';
import { useContext } from 'react';
import { BagContext } from '../../common/BagProvider';
import BagItem from './BagItem';

interface BagProps {}

const Bag: NextPage<BagProps> = () => {
	const { products, totalPrice } = useContext(BagContext);

	return (
		<div className=' w-full h-full flex flex-col '>
			<h5 className=' hidden md:block uppercase'>Order summary</h5>
			<p className=' md:hidden TextRegular uppercase'>Order summary</p>

			<div className=' grow flex flex-col gap-2 overflow-y-auto my-3'>
				{products.map((item) => {
                    return <BagItem product={item} key={item.id} />;
				})}
			</div>
			<div className='flex justify-between items-center border-y border-oyster py-3'>
				<p className='TextRegular uppercase'>Grand tota incl. tax</p>
				<p className='Caption font-bold'>${totalPrice}</p>
			</div>
			<div className=' flex flex-col-reverse md:flex-row gap-2 py-4 '>
				<button className='OutlinedBtn md:grow uppercase'>
					Continue shopping
				</button>
				<button className='SecondaryBtn md:grow uppercase'>
					Proceed sheckout
				</button>
			</div>
		</div>
	);
};

export default Bag;
