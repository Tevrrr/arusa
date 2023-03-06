/** @format */

import { NextPage, NextPageContext } from 'next';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../common/UserProvider';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { IOrderForm } from '../../../common/types/orderForm';
import { getOrder } from '../../../service/getters/order';
import { IBagItem } from '../../../common/types/BagContext';
import { getProductsBag } from '../../../service/getters/product';
import Link from 'next/link';
import Image from 'next/image';
import { putOrderForm } from '../../../service/put/orderForm';
import toast from 'react-hot-toast';
import imageLoader from '../../../common/loader';

interface OrderPageProps {
	id: string;
}

const OrderPage: NextPage<OrderPageProps> = ({ id }) => {
	const { token } = useContext(UserContext);
	const [data, setData] = useState<IOrderForm | null>(null);
	const [bag, setBag] = useState<IBagItem[]>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		if (token)
			getOrder(token, id, (data) => {
				setData(data);
				getProductsBag(data.products, (value) => {
					setBag(value);
				});
			});
	}, [token]);
	useEffect(() => {
		let totalPrice = 0;
		bag.forEach((item) => {
			const { count, price } = item;
			totalPrice = count * price + totalPrice;
		});
		setTotalPrice(totalPrice);
	}, [bag]);

	const finishedToggle = async () => {
		if (data && token) {
			putOrderForm(
				{ ...data, finished: !data.finished },
				token,
				(order, error) => {
					if (order) {
						toast.success('Order updated!', {
							position: 'bottom-center',
						});
						setData(order);
						return;
					}

					if (error) {
						toast.error(error, {
							position: 'bottom-center',
						});
					} else {
						toast.error('Order update error!', {
							position: 'bottom-center',
						});
					}
				}
			);
		}
	};

	return (
		<MainAdminContainer title='Order'>
			{data ? (
				<div className=' mt-16 p-4 w-full max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 '>
					<div className='flex flex-col gap-2'>
						<p className='TextRegular'>ID: {id}</p>
						<p className='TextRegular'>
							Name: {data.clientData.firstName}{' '}
							{data.clientData.lastName}
						</p>
						<p className='TextRegular'>
							Address: {data.clientData.address}
						</p>
						<p className='TextRegular'>
							Phone: {data.clientData.phone}
						</p>
						<p className='TextRegular'>Date: {data.date}</p>
						<p className='TextLarge'>Total prise: ${totalPrice}</p>
						<button
							className={
								data.finished ? 'PrimaryBtn' : 'SecondaryBtn'
							}
							onClick={finishedToggle}>
							{data.finished
								? 'Activate order'
								: 'Complete order'}
						</button>
					</div>
					<div className='flex flex-wrap gap-4 grow'>
						{bag?.map((item) => {
							return (
								<Link
									href={{
										pathname: '/shop/[id]',
										query: { id: item._id },
									}}
									className=' max-w-[250px] flex flex-col gap-1'
									key={item._id}>
									<div className=' relative w-full h-40'>
										<Image
											loader={imageLoader}
											alt=''
											src={item.mainImage}
											fill
											className='object-cover absolute -z-10 rounded-md'
										/>
									</div>

									<h5>Name: {item.title}</h5>
									<p className='TextRegular'>
										ID: {item._id}
									</p>
									<p className='TextRegular'>
										Prise: ${item.price} x {item.count} = $
										{item.price * item.count}
									</p>
								</Link>
							);
						})}
					</div>
				</div>
			) : (
				<></>
			)}
		</MainAdminContainer>
	);
};

export default OrderPage;

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string;
	};
}

export const getServerSideProps = async ({ query }: PostNextPageContext) => {
	return {
		props: { id: query.id },
	};
};
