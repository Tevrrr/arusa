/** @format */

import type { NextPage } from 'next';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import OrderFormCard from '../../../components/AdminPanel/OrderFormCard';
import { IOrderForm } from '../../../common/types/orderForm';
import { useContext, useEffect, useState } from 'react';
import { getOrders } from '../../../service/getters/orders';
import uniqid from 'uniqid';
import { UserContext } from '../../../common/UserProvider';
import PageNav from '../../../components/AdminPanel/PageNav';

interface OrdersProps {}

const Orders: NextPage<OrdersProps> = () => {
	const { token } = useContext(UserContext);
	const [forms, setForms] = useState<IOrderForm[]>([]);
	const [page, setPage] = useState<number>(1);
	const [pageCount, setPageCount] = useState<number>(1);

	useEffect(() => {
		const pageSize = 5;
		if (token) {
			getOrders(
				token,
				pageSize,
				pageSize * (page - 1),
				false,
                (forms, countForms) => {
                    console.log(countForms);
					setForms(forms);
					setPageCount(Math.ceil(countForms / pageSize));
				}
			);
		}
	}, [page, token]);

	return (
		<MainAdminContainer title='Orders'>
			<div className='mt-16 w-full mx-auto max-w-screen-xl'>
				<div className=' flex flex-wrap justify-between'>
					{!forms ||
						forms.map((item) => {
							return (
                                <OrderFormCard
                                    className=' max-w-lg w-full'
									key={uniqid(item.clientData.phone)}
									id={item._id}
									name={`${item.clientData.firstName} ${item.clientData.lastName}`}
									phone={item.clientData.phone}
									address={item.clientData.address}
									date={item.date}
								/>
							);
						})}
				</div>
				<div className=' flex justify-center p-2'>
					<PageNav
						count={pageCount}
						setPage={setPage}
						activePage={page}
					/>
				</div>
			</div>
		</MainAdminContainer>
	);
};

export default Orders;
