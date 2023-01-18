import type { NextPage } from 'next'
import Image from 'next/image';
import { useContext } from 'react';
import { BagContext } from '../common/BagProvider';
import { IProduct } from '../common/types/product';
import Link from 'next/link';

interface ProductCardProps {
	data: IProduct;
	className?: string;
};
//  
const ProductCard: NextPage<ProductCardProps> = ({
    className = '',
    data
}) => {
    const { title, price, id, mainImage } = data;





    return (
		<Link
			href={`/shop/${id}`}
			className={`cursor-pointer flex flex-col grow p-2
                        border-b odd:border-r border-oyster
                        min-w-[49%]  min-h-[360px] md:min-h-[460px] ${className}`}>
			<div className=' relative grow '>
				<Image alt=''  src={mainImage} fill className=' object-cover' />
			</div>
			<div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between py-3 '>
				<p className='TextSmall uppercase'>{title}</p>
				<p className='TextSmall'>${price}</p>
			</div>
		</Link>
	);
};

export default ProductCard;