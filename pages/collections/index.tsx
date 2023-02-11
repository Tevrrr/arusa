/** @format */

import type { NextPage } from 'next';
import MainContainer from '../../components/MainContainer/MainContainer';
import { FILTERS } from '../../common/helpers/consts';
import CollectionCard from '../../components/Collection/CollectionCard';

const Collections: NextPage = () => {
	return (
		<MainContainer title='Collections'>
			<div className='flex justify-center items-center min-h-screen pt-14'>
				<div className=' w-full max-w-screen-xl flex flex-wrap row-g p-4'>
					{FILTERS.map((item, i) => {
						return (
							<CollectionCard
								key={i}
								href={{
									pathname: '/collections/[collectionName]',
									query: { collectionName: item },
								}}
								title={item}
								image={`/collectionGroupsPNG/${item}.png`}
							/>
						);
					})}
				</div>
			</div>
		</MainContainer>
	);
};

export default Collections;
