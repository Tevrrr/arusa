/** @format */

import type { NextPage } from 'next';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { getFilters } from '../../../service/getters/filter';
import Select from '../../../components/Select';
import Input from '../../../components/Input';
import { useForm } from 'react-hook-form';
import { postCollection } from '../../../service/posts/collection';
import { UserContext } from '../../../common/UserProvider';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { register } from 'ts-node';

interface AddCollectionProps {
	filters: string[];
}

interface ICollectionForm {
	title: string;
	filter: string;
	image: FileList;
}

const AddCollection: NextPage<AddCollectionProps> = ({ filters }) => {
	const { token } = useContext(UserContext);
	const { register, handleSubmit } = useForm<ICollectionForm>();
	const router = useRouter();
	const onSubmit = handleSubmit(async (data) => {
		const { title, filter, image } = data;
		if (token) {
            postCollection(title, filter, image[0], token,
            (collection, error) => {
				if (collection) {
					toast.success('Collection created!', {
						position: 'bottom-center',
					});
					return;
				}

				if (error) {
					toast.error(error, {
						position: 'bottom-center',
					});
				} else {
					toast.error('Error creating collection!', {
						position: 'bottom-center',
					});
				}
			}
		);
		}
	});
	return (
		<MainAdminContainer title='Add collection'>
			<form
				onSubmit={onSubmit}
				className=' mt-20 mb-6 mx-auto max-w-lg w-full flex flex-col gap-4 p-4 border border-oyster rounded-lg'>
				<Input
					placeholder='Title'
					className=' !w-full !text-stormy'
					register={register('title', { required: true })}
				/>
				{!filters || (
					<Select
						options={filters.map((item) => {
							return { name: item, value: item };
						})}
						title='Filters'
						register={register('filter', { required: true })}
					/>
				)}
				<input
					type='file'
					accept='image/png, image/jpeg'
					{...register('image', { required: true })}
				/>
				<button type='submit' className='SecondaryBtn w-full'>
					Add collection
				</button>
			</form>
		</MainAdminContainer>
	);
};

export const getServerSideProps = async () => {
	const filters = await getFilters();
	return {
		props: { filters },
	};
};

export default AddCollection;
