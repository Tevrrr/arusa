import type { NextPage } from 'next'
import Image from 'next/image';

interface ProductCardProps {
	title: string;
	price: string;
};

const ProductCard: NextPage<ProductCardProps> = ({ title, price }) => {
	return (
		<div className='grow p-2 min-w-[150px] md:min-w-[330px] max-w-[180px] md:max-w-[330px]'>
			<div className=' relative w-full min-h-[150px] md:min-h-[330px] bg-stormy '>
				<Image
					alt=''
					src='/formBg.png'
					fill
					className=' object-cover'
				/>
			</div>
			<div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between py-3 '>
				<p className='Small uppercase'>{title}</p>
				<p className='Small'>${price}</p>
			</div>
		</div>
	);
};

export default ProductCard;