import type { NextPage } from 'next'
import Image from 'next/image';

interface ProductCardProps {
	title: string;
	price: string;
	className?: string;
};
//  
const ProductCard: NextPage<ProductCardProps> = ({
	title,
	price,
	className = '',
}) => {
    return (
		// min-w-[49%] md:min-w-fit
		<div
			className={`flex flex-col grow p-2
                        border-b odd:border-r border-oyster
                        min-w-[49%]  min-h-[230px] md:min-h-[360px] ${className}`}>
			<div className=' relative grow '>
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