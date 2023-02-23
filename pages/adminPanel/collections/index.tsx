import type { NextPage } from 'next'
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { getCollections } from '../../../service/getters/collection';
import { ICollection } from '../../../common/types/collection';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillFileAdd, AiOutlineClose } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { UserContext } from '../../../common/UserProvider';
import { deleteCollection } from '../../../service/delete/deleteCollection';
import toast from 'react-hot-toast';


interface CollectionsProps {
	data: ICollection[] | null;
};

const Collections: NextPage<CollectionsProps> = ({ data }) => {
	const { token } = useContext(UserContext);
	const [collections, setCollections] = useState<ICollection[] | null>(data);
	const btnDeleteCollection = (collectionID: string): (() => void) => {
		return async () => {
			if (token) {
                const result = await deleteCollection(
					collectionID,
					token,
					(collection, error) => {
						if (collection) {
							toast.success('Collection deleted!', {
								position: 'bottom-center',
							});
							return;
						}

						if (error) {
							toast.error(error, {
								position: 'bottom-center',
							});
						} else {
							toast.error('Collection deletion error!', {
								position: 'bottom-center',
							});
						}
					}
				);
                if (result && collections) {
					setCollections(
						collections.filter((item) => item._id !== collectionID)
					);
				}
            }
            
		};
	};
	return (
		<MainAdminContainer title='Collections'>
			<h2 className=' py-4 mt-14 text-center text-opal border-b border-oyster '>
				Collections
			</h2>
			<div className=' max-w-screen-xl mx-auto w-full flex flex-wrap justify-between gap-4 p-4'>
				<Link
					href={'collections/addCollection'}
					className=' w-full max-w-sm h-60 rounded-md overflow-hidden bg-smoke relative text-white flex gap-4 items-center justify-center flex-col'>
					<AiFillFileAdd size={50} />
					<h5>Add a new collection</h5>
				</Link>
				{collections?.map((item) => {
					return (
						<div
							className=' w-full max-w-sm relative'
							key={item._id}>
							<button
								onClick={btnDeleteCollection(item._id)}
								className=' transition-all hover:scale-110 z-50 p-0 w-10 h-10 absolute -top-2 -right-2 flex justify-center items-center rounded-full bg-opal text-white'>
								<AiOutlineClose size={26} />
							</button>
							<Link
								href={{
									pathname: 'collections/[id]',
									query: { id: item._id },
								}}
								className=' w-full h-60 rounded-md overflow-hidden bg-stormy bg-opacity-80 text-white flex items-center justify-center flex-col'>
								<h3>{item.name}</h3>
								<p className='TextLarge'>{item.filter}</p>
								<p className='TextRegular'>{item._id}</p>
								<Image
									alt=''
									src={item.image}
									fill
									className='object-cover absolute -z-10 rounded-md'
								/>
							</Link>
						</div>
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
		props: {  data },
	};
};