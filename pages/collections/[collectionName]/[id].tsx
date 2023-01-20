/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import { getProductsByCollection } from '../../../service';
import { IProduct } from '../../../common/types/product';
import ProductCard from '../../../components/ProductCard';

interface CollectionPageProps {
	products: IProduct[] | undefined;
}

const CollectionPage: NextPage<CollectionPageProps> = ({ products }) => {
	return (
		<MainContainer title='Name'>
			<div className=' flex justify-center pt-14'>
				<div className=' max-w-screen-xl w-full flex flex-wrap justify-between'>
					{products ? (
						products.map((item) => (
							<ProductCard
								key={item.id}
								data={item}
								className=' lg:!border-0 lg:max-w-[33.33%] xl:max-w-[25%] '
							/>
						))
					) : (
						<></>
                    )}
                    <div className='grow'></div>
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
