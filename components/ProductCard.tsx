import type { NextPage } from 'next'
import Image from 'next/image';

interface ProductCardProps {
	title: string;
	price: string;
	src:string;
	className?: string;
};
//  
const ProductCard: NextPage<ProductCardProps> = ({
	title,
    price,
    src,
	className = '',
}) => {
    return (
		<div
			className={`cursor-pointer flex flex-col grow p-2
                        border-b odd:border-r border-oyster
                        min-w-[49%]  min-h-[360px] md:min-h-[460px] ${className}`}>
			<div className=' relative grow '>
				<Image alt='' src={src} fill className=' object-cover' />
			</div>
			<div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between py-3 '>
				<p className='TextSmall uppercase'>{title}</p>
				<p className='TextSmall'>${price}</p>
			</div>
		</div>
	);
};

export default ProductCard;