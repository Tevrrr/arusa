import type { NextPage } from 'next'

interface ProductCardProps {
	title: string;
	price: string;
};

const ProductCard: NextPage<ProductCardProps> = ({ title, price }) => {
	return (
		<>
			<div className=' w-full min-h-[330px] bg-stormy '></div>
			<div className='flex justify-between py-3 '>
				<p className='Small uppercase'>{title}</p>
				<p className='Small'>${price}</p>
			</div>
		</>
	);
};

export default ProductCard;