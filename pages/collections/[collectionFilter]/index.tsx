/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import { ICollection } from '../../../common/types/collection';
import CollectionCard from '../../../components/Collection/CollectionCard';
import { getCollectionsByFilter } from '../../../service/getters/collection';
import Link from 'next/link';


interface ProductProps {
	collectionName: string | null;
    collections: ICollection[] | null;
}

const CollectionGroupsPage: NextPage<ProductProps> = ({
	collectionName,
	collections,
}) => {

	return (
		<MainContainer title={collectionName || ''}>
			<div className='flex justify-center items-center min-h-screen pt-14'>
				<div className=' w-full max-w-screen-xl flex flex-wrap row-g p-4'>
					{collections?.length ? (
                        collections.map((item) => {
                            console.log(item);
							return (
								<CollectionCard
									key={item._id}
									href={{
										pathname: `/collections/[collectionFilter]/[id]`,
										query: {
											collectionFilter: item.filter,
											id: item._id,
										},
									}}
									title={item.name}
									image={item.image}
								/>
							);
						})
					) : (
						<div className=' w-full flex flex-col gap-4 items-center justify-center'>
							<h3>Collections not found</h3>
							<Link href='/collections'>
								<button className='SecondaryBtn'>
									<h5>Return</h5>
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</MainContainer>
	);
};

interface PostNextPageContext extends NextPageContext {
	query: {
		collectionFilter: string;
	};
}

export const getServerSideProps = async ({ query }: PostNextPageContext) => {
    
    const collections = await getCollectionsByFilter(query.collectionFilter);
	return {
		props: { collections, collectionName: query.collectionFilter },
	};
};

export default CollectionGroupsPage;
