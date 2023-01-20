/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import { ICollection } from '../../../common/types/collection';
import { getCollections } from '../../../service';
import CollectionCard from '../../../components/Collection/CollectionCard';

interface ProductProps {
	collectionName: string | undefined;
    collections: ICollection[] | undefined;
}

const CollectionGroupsPage: NextPage<ProductProps> = ({
	collectionName,
	collections,
}) => {
	return (
		<MainContainer title={collectionName || ''}>
			<div className='flex justify-center items-center min-h-screen pt-14'>
				<div className=' w-full max-w-screen-xl flex flex-wrap row-g p-4'>
					{collections ? (collections.map((item, i) => {
                        return (
							<CollectionCard
								key={i}
								href={{
									pathname: `/collections/${collectionName}/[id]`,
									query: { id: item.code },
								}}
								title={item.name}
								image={`/collectionGroupsPNG/${item.filter}.png`}
							/>
						);
					})):<></>}
				</div>
			</div>
		</MainContainer>
	);
};

interface PostNextPageContext extends NextPageContext {
	query: {
		collectionName: string;

	};
}

export const getServerSideProps = async ({ query }: PostNextPageContext) => {
    const collections = await getCollections(query.collectionName);
	return {
		props: { collectionName: query.collectionName, collections },
	};
};

export default CollectionGroupsPage;
