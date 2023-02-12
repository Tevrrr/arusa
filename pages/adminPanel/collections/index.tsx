import type { NextPage } from 'next'
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { getCollection } from '../../../service/getters/collection';
import { ICollection } from '../../../common/types/collection';
import uniqid from 'uniqid';

interface CollectionsProps {
	collections:ICollection[];
};

const Collections: NextPage<CollectionsProps> = ({ collections = [] }) => {
	return (
		<MainAdminContainer title='Collections'>
			<div className=' max-w-screen-xl mx-auto w-full mt-14 flex flex-wrap gap-4'>
				{collections?.map((item) => {
                    return (
						<div
							className=' p-2 flex flex-col gap-2'
							key={uniqid(item.name)}>
							<p className='TextLarge'>{item.name}</p>
							<p className='TextRegular'>{item._id}</p>
						</div>
					);
				})}
			</div>
		</MainAdminContainer>
	);
};

export default Collections;

export const getServerSideProps = async () => {
    const data = await getCollection();
	return {
		props: { collections: data || [] },
	};
};