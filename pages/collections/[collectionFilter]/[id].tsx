/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import { getProductsByCollection } from '../../../service';
import { IProduct } from '../../../common/types/product';
import ProductCard from '../../../components/ProductCard';
import { getCollectionByID } from '../../../service/getters/collection';
import { getProductsByIDs } from '../../../service/getters/product';

interface CollectionPageProps {
	products: IProduct[] | undefined;
}

const CollectionPage: NextPage<CollectionPageProps> = ({ products }) => {
	return (
		<MainContainer title='Name'>
			<div className='mx-auto pt-14 max-w-screen-xl w-full flex flex-wrap justify-between'>
				{products ? (
					products.map((item) => (
						<ProductCard
							key={item._id}
							data={item}
							className=' lg:!border-0 max-w-[50%] lg:max-w-[33.33%] xl:max-w-[25%] '
						/>
					))
				) : (
					<></>
				)}
				<div className='grow'></div>
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
	const collection = await getCollectionByID(query.id);
	const products = await getProductsByIDs(collection?.products || []);
	return {
		props: { products },
	};
};

export default CollectionPage;
