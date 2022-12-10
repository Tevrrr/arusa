import type { NextPage } from 'next'

interface CardProductProps {
	title: string;
    price: string;
};

const CardProduct: NextPage<CardProductProps> = ({ title , price}) => {
	return (
		<div className=' max-w-[300px] min-w-[200px] w-full'>
			<div className=' w-full h-[300px] bg-opal'></div>
			<div className='flex justify-between py-3 text-opal'>
				<p className='Small uppercase'>{title}</p>
				<p className='Small'>${price}</p>
			</div>
		</div>
	);
};

export default CardProduct;