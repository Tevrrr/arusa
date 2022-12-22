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
		// min-w-[49%] md:min-w-fit md:!border-0 justify-center  border-b odd:border-r border-oyster
		<div
            className={`flex flex-col grow p-2 md:p-0 
                        w-full min-h-[230px] md:min-h-[360px] max-w-[170px] md:min-w-[330px] min-w-[150px] ${className}`}>
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