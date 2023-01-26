import type { NextPage } from 'next'
import Image from 'next/image';
import { useContext } from 'react';
import { BagContext } from '../common/BagProvider';
import { IProduct } from '../common/types/product';
import Link from 'next/link';

interface ProductCardProps {
	data: IProduct;
	className?: string;
	imageClassName?: string;
};
//  
const ProductCard: NextPage<ProductCardProps> = ({
    className = '',
    imageClassName = '',
    data
}) => {
    const { title, price, id, mainImage, sellability } = data;





    return (
		<Link
			href={{
				pathname: '/shop/[id]',
				query: { id },
			}}
			className={`cursor-pointer flex flex-col grow p-2 box-border
                        border-b odd:border-r border-oyster
                        w-[50%]  min-h-[360px] md:min-h-[460px] ${className}`}>
			<div className=' relative grow  overflow-hidden'>
				<Image
					alt=''
					src={mainImage}
					fill
					className={` object-cover ${imageClassName}`}
				/>
			</div>
			<div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between py-3 '>
				<p className='TextSmall uppercase'>
					{title} {sellability}
				</p>
				<p className='TextSmall'>${price}</p>
			</div>
		</Link>
	);
};

export default ProductCard;