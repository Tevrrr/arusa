/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import { IProduct } from '../../../common/types/product';
import ProductCard from '../../../components/ProductCard';
import { getCollectionByID } from '../../../service/getters/collection';
import { getProductsByIDs } from '../../../service/getters/product';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ICollection } from '../../../common/types/collection';
import { useEffect, useLayoutEffect } from 'react';

interface CollectionPageProps {
	collection: ICollection|null;
	products: IProduct[] | undefined;
}

const CollectionPage: NextPage<CollectionPageProps> = ({
	products,
	collection,
}) => {
    const router = useRouter();
    useLayoutEffect(() => {
        if (!collection) {
          router.push('/404')
      }
    }, [])
    
	return (
		<MainContainer title={collection?.name || ''}>
			<div className='mx-auto pt-14 max-w-screen-xl w-full flex flex-wrap justify-between'>
				{products?.length ? (
					products.map((item) => (
						<ProductCard
							key={item._id}
							data={item}
							className=' lg:!border-0 max-w-[50%] lg:max-w-[33.33%] xl:max-w-[25%] '
						/>
					))
				) : (
					<>
						<div className=' min-h-screen w-full flex flex-col gap-4 items-center justify-center'>
							<h3>This collection is empty</h3>
							<Link
								href={{
									pathname: '/collections/[collectionFilter]',
									query: {
										collectionFilter:
											router.query.collectionFilter,
									},
								}}>
								<button className='SecondaryBtn'>
									<h5>Return</h5>
								</button>
							</Link>
						</div>
					</>
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
		props: { products, collection },
	};
};

export default CollectionPage;
