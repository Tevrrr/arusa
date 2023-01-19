/** @format */

import type { NextPage } from 'next';
import MainContainer from '../../components/MainContainer/MainContainer';
import { FILTERS } from '../../common/helpers/consts';
import Link from 'next/link';
import { getProductsByCollection } from '../../service';
import { collections } from '../../service/data/collections';

const Collections: NextPage = () => {

	return (
		<MainContainer title='Collections'>
			<div className='flex justify-center items-center min-h-screen pt-14'>
				<div className=' w-full max-w-screen-xl flex flex-wrap row-g p-4'>
					{FILTERS.map((item, i) => {
						return (
							<div
								key={i}
								className=' box-border w-full md:w-[50%] md:last:max-w-[50%] grow flex justify-center items-center h-52 p-4 '>
								<Link
									href={{
										pathname:
											'/collections/[collectionName]',
										query: { collectionName: item },
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

export default Collections;
