/** @format */

import { NextPage, NextPageContext } from 'next';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../common/UserProvider';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { IOrderForm } from '../../../common/types/orderForm';
import { getOrder } from '../../../service/getters/order';
import { IBagItem } from '../../../common/types/BagContext';
import { getProductsByIDs } from '../../../service/getters/product';
import BagItem from '../../../components/MainContainer/BagItem';

interface OrderPageProps {
	id: string;
}

const OrderPage: NextPage<OrderPageProps> = ({ id }) => {
	const { token } = useContext(UserContext);
    const [data, setData] = useState<IOrderForm | null>(null);
    const [bag, setBag] = useState<IBagItem[]>([])

    useEffect(() => {
        if (token) getOrder(token, id, (data) => {
            setData(data)
            getProductsByIDs(data.products, value => {
                setBag(value);
            });
        })
    }, [token]);

	return (
		<MainAdminContainer title='Order'>
			{data ? (
				<div className=' mt-16 w-full max-w-screen-xl mx-auto flex gap-4 '>
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
                    </div>
                    <div className=' grow'>
                        {bag?.map(item => {
                            return <BagItem key={item._id} product={item}/>
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
