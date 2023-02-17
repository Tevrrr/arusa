import type { NextPage } from 'next'
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { getCollections } from '../../../service/getters/collection';
import { ICollection } from '../../../common/types/collection';
import uniqid from 'uniqid';
import Link from 'next/link';

interface CollectionsProps {
	collections:ICollection[] | null;
};

const Collections: NextPage<CollectionsProps> = ({ collections }) => {
    console.log(collections);
	return (
		<MainAdminContainer title='Collections'>
			<div className=' max-w-screen-xl mx-auto w-full mt-14 flex flex-wrap gap-4'>
				{collections?.map((item) => {
                    return (
						<Link
							href={{
								pathname: 'collections/[id]',
								query: { id: item._id },
							}}
							className=' p-2 flex flex-col gap-2'
							key={uniqid(item.name)}>
							<p className='TextLarge'>{item.name}</p>
							<p className='TextRegular'>{item._id}</p>
						</Link>
					);
				})}
			</div>
		</MainAdminContainer>
	);
};

export default Collections;

export const getServerSideProps = async () => {
    const data = await getCollections();
	return {
		props: { collections: data },
	};
};