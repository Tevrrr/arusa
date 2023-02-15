/** @format */

import type { NextPage } from 'next';
import Link from 'next/link';
import { AiFillFile } from 'react-icons/ai';

interface OrderFormCardProps {
	className?: string;
	id: string;
	name: string;
	address: string;
	phone: string;
	date: string;
}

const OrderFormCard: NextPage<OrderFormCardProps> = ({
	className,
	id,
	name,
	address,
	phone,
	date,
}) => {
	return (
		<Link
			href={{
				pathname: '/adminPanel/orders/[id]',
				query: { id },
			}}
			className={` w-full flex gap-4 p-2 ${className}`}>
			<div className=' shrink-0 flex justify-center items-center bg-linen text-opal h-28 w-28'>
				<AiFillFile size={30} />
			</div>
			<div className='flex flex-col justify-between'>
				<p className='TextLarge'>ID: {id}</p>
				<p className='TextRegular'>Name: {name}</p>
				<p className='TextRegular'>Address: {address}</p>
				<p className='TextRegular'>Phone: {phone}</p>
				<p className='TextRegular'>Date: {date}</p>
			</div>
		</Link>
	);
};

export default OrderFormCard;
