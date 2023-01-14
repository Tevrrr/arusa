/** @format */

import type { NextPage } from 'next';
import { useContext } from 'react';
import { BagContext } from '../../common/BagProvider';
import { IBagItem } from '../../common/types/BagContext';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';

import Image from 'next/image';

interface BagItemProps {
	product: IBagItem;
}

const BagItem: NextPage<BagItemProps> = ({ product }) => {
	const { incrementProductCount, decrementProductCount, removeProduct } =
		useContext(BagContext);
	const { title, price, count, id, mainImage } = product;

	const handlerCount = (
		handlerFunction: (id: number) => void
	): (() => void) => {
		return () => {
			handlerFunction(id);
		};
	};
	return (
		<div className=' relative flex gap-4'>
			<div className=' absolute top-0 right-0 z-10 border border-oyster rounded-full p-1 transition-all duration-75 hover:bg-oyster cursor-pointer'>
				<AiOutlineClose
					className=' text-xl cursor-pointer'
					onClick={() => removeProduct(id)}
				/>
			</div>
			<div className=' relative w-32 h-32 border border-oyster overflow-hidden rounded-xl'>
				<Image alt='' src={mainImage} fill className=' object-cover' />
			</div>
			<div className='grow flex flex-col justify-between'>
				<h5>{title}</h5>
				<div className='flex gap-2 justify-between items-center'>
					<p className='Caption font-bold'>${price}</p>
					<div className='flex justify-between items-center gap-2  overflow-hidden rounded-xl border border-oyster'>
						<button
							className=' px-3 md:px-5 py-2 transition-all duration-75 rounded-none hover:bg-oyster cursor-pointer'
							onClick={handlerCount(incrementProductCount)}>
							<AiOutlinePlus className=' text-xl' />
						</button>

						<p className='Caption'>{count}</p>
						<button
							className=' px-3 md:px-5 py-2 transition-all duration-75 rounded-none disabled:cursor-auto disabled:bg-[#0000] hover:bg-oyster cursor-pointer'
							disabled={count <= 1}
							onClick={handlerCount(decrementProductCount)}>
							<AiOutlineMinus className=' text-xl' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
// AiOutlinePlus AiOutlineMinus
export default BagItem;
