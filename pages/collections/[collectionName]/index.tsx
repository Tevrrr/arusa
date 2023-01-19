/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Link from 'next/link';

interface ProductProps {
	collectionName: string | undefined;
}

const CollectionGroupsPage: NextPage<ProductProps> = ({ collectionName }) => {
	return (
        <MainContainer title={collectionName || ''}>
            
			<div className='flex justify-center items-center min-h-screen pt-14'>
				<div className=' w-full max-w-screen-xl flex flex-wrap row-g p-4'>
					{['1', '2', '3', '4', '5'].map((item, i) => {
						return (
							<div
								key={i}
								className=' box-border w-full md:w-[50%] md:last:max-w-[50%] grow flex justify-center items-center h-52 p-4 '>
								<Link
									href={{
										pathname: `/collections/${collectionName}/[id]`,
										query: { id: item },
									}}
									className='w-full h-full flex items-center justify-center border border-oyster rounded-lg overflow-hidden '>
									<h4>{item}</h4>
								</Link>
							</div>
						);
					})}
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
	return {
		props: { collectionName: query.collectionName },
	};
};

export default CollectionGroupsPage;
