/** @format */

import type { NextPage } from 'next';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import OrderFormCard from '../../../components/AdminPanel/OrderFormCard';
import { IOrderForm } from '../../../common/types/orderForm';
import { useContext, useEffect, useState } from 'react';
import { getOrders } from '../../../service/getters/order';
import uniqid from 'uniqid';
import { UserContext } from '../../../common/UserProvider';
import PageNav from '../../../components/AdminPanel/PageNav';
import Select from '../../../components/Select';

interface OrdersProps {}

const Orders: NextPage<OrdersProps> = () => {
	const { token } = useContext(UserContext);
	const [forms, setForms] = useState<IOrderForm[]>([]);
	const [page, setPage] = useState<number>(1);
	const [pageCount, setPageCount] = useState<number>(1);
	const [orderStatus, setOrderStatus] = useState('false');

	const pageSize = 6;
	const orderStatuses = [
		{ name: 'All', value: '' },
		{ name: 'Active', value: 'false' },
		{ name: 'Finished', value: 'true' },
	];
	useEffect(() => {
		if (token) {
			getOrders(
				token,
				pageSize,
				pageSize * (page - 1),
				orderStatus,
				(forms, countForms) => {
					console.log(countForms);
					setForms(forms);
					setPageCount(Math.ceil(countForms / pageSize));
				}
			);
		}
	}, [page, token, orderStatus]);

	return (
		<MainAdminContainer title='Orders'>
			<div className=' flex flex-col min-h-screen'>
				<h2 className=' py-4 mt-14 text-center text-opal border-b border-oyster '>
					Orders
				</h2>
				<div className='flex justify-center w-full py-4'>
					<div className=' max-w-xs w-full flex gap-4 items-baseline'>
						<p className='TextRegular w-max whitespace-nowrap'>
							Order status
						</p>

						<Select
							value={'' + orderStatus}
							setValue={setOrderStatus}
							options={orderStatuses}
						/>
					</div>
				</div>

				<div className='mt-2 w-full mx-auto max-w-screen-xl grow flex flex-col justify-between'>
					<div className=' flex flex-wrap justify-between'>
						{!forms ||
							forms.map((item) => {
								return (
									<OrderFormCard
										className={`max-w-lg w-full ${
											item.finished && !orderStatus
												? 'opacity-80'
												: ''
										}`}
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
						{pageCount <= 1 || (
							<PageNav
								count={pageCount}
								setPage={setPage}
								activePage={page}
							/>
						)}
					</div>
				</div>
			</div>
		</MainAdminContainer>
	);
};

export default Orders;
