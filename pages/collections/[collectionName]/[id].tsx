/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import { getProductsByCollection } from '../../../service';
import { IProduct } from '../../../common/types/product';

interface CollectionPageProps {
	products: IProduct[] | undefined;
}

const CollectionPage: NextPage<CollectionPageProps> = ({ products }) => {
	return (
		<MainContainer title='Name'>
			<div className=' flex justify-center pt-14'>
				<div className=' max-w-screen-xl w-full flex justify-center'>
					{products ? (
						products.map((item) => (
							<h4 key={item.id}>{item.title}</h4>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</MainContainer>
	);
};

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string;
	};
}

export const getServerSideProps = async ({ query }: PostNextPageContext) => {
	const products = await getProductsByCollection(query.id);
	return {
		props: { products },
	};
};

export default CollectionPage;
