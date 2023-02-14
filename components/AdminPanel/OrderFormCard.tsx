import type { NextPage } from 'next'
import { AiFillFile } from 'react-icons/ai';

interface OrderFormCardProps {
	className?:string;
};

const OrderFormCard: NextPage<OrderFormCardProps> = ({ className }) => {
	return (
		<div className={` w-full flex gap-4 p-2 ${className}`}>
			<div className=' flex justify-center items-center bg-linen text-opal h-28 w-28'>
				<AiFillFile size={30} />
			</div>
			<div className='flex flex-col justify-between'>
				<p className='TextLarge'>ID: 63ebd17876d896a1c73971e9</p>
				<p className='TextRegular'>Name: Oleg Bazov</p>
				<p className='TextRegular'>
					Address: str Pushkin house of Colotushkin
				</p>
				<p className='TextRegular'>Phone: 380667041857</p>
				<p className='TextRegular'>
					Date: 2023-02-14T18:22:48.236+00:00
				</p>
			</div>
		</div>
	);
};

export default OrderFormCard;