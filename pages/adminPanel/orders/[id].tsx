/** @format */

import { NextPage, NextPageContext } from 'next';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../common/UserProvider';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { IOrderForm } from '../../../common/types/orderForm';
import { getOrder } from '../../../service/getters/order';
import { IBagItem } from '../../../common/types/BagContext';
import { getProductsBag} from '../../../service/getters/product';
import BagItem from '../../../components/MainContainer/BagItem';
import Link from 'next/link';

interface OrderPageProps {
	id: string;
}

const OrderPage: NextPage<OrderPageProps> = ({ id }) => {
	const { token } = useContext(UserContext);
    const [data, setData] = useState<IOrderForm | null>(null);
    const [bag, setBag] = useState<IBagItem[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        if (token) getOrder(token, id, (data) => {
            setData(data)
            getProductsBag(data.products, (value) => {
				setBag(value);
			});
        })
    }, [token]);
    useEffect(() => {
        let totalPrice = 0;
        bag.forEach(item => {
            const { count, price} = item
            totalPrice = count * price + totalPrice;
        })
        setTotalPrice(totalPrice);
	}, [bag]);

	return (
		<MainAdminContainer title='Order'>
			{data ? (
				<div className=' mt-16 w-full max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 '>
					<div className='flex flex-col gap-2'>
						<p className='TextLarge'>ID: {id}</p>
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
					</div>
					<div className='flex flex-wrap gap-4 grow'>
						{bag?.map((item) => {
							return (
								<Link
									href={{
										pathname: '/shop/[id]',
										query: { id: item._id },
									}}
									className=' flex gap-4'
									key={item._id}>
									<div className=' flex flex-col '>
										<h5>{item.title}</h5>
										<p className='TextRegular'>
											{item._id}
										</p>
										<p className='TextRegular'>
											${item.price} x {item.count} = $
											{item.price * item.count}
										</p>
									</div>
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
