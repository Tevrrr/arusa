import type { NextPage } from 'next'
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import OrderFormCard from '../../../components/AdminPanel/OrderFormCard';

interface OrdersProps {};

const Orders: NextPage<OrdersProps> = () => {

    return (
		<MainAdminContainer title='Orders'>
			<div className='mt-16 w-full mx-auto max-w-screen-xl flex flex-wrap justify-between'>
				<OrderFormCard className=' max-w-lg' />
				<OrderFormCard className=' max-w-lg' />
				<OrderFormCard className=' max-w-lg' />
				<OrderFormCard className=' max-w-lg' />
			</div>
		</MainAdminContainer>
	);
}

export default Orders;