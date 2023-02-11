/** @format */

import type { NextPage } from 'next';
import { UseFormRegister } from 'react-hook-form';
import { IProductPage } from '../../common/types/product';
import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';
import { BaseSyntheticEvent } from 'react';

interface ProductPageFormProps {
	register: UseFormRegister<IProductPage>;
	onSubmit: (
		e?: BaseSyntheticEvent<object, any, any> | undefined
	) => Promise<void>;
}

const ProductPageForm: NextPage<ProductPageFormProps> = ({
	register,
	onSubmit,
}) => {
	return (
		<form
			className=' mt-20 mb-6 mx-auto max-w-3xl w-full flex flex-wrap gap-4 p-4 border border-oyster rounded-lg'
			onSubmit={onSubmit}>
			<div className='flex flex-col grow gap-4 justify-between'>
				<Input
					placeholder='Title'
					className=' !w-full !text-stormy'
					register={register('title', {
						required: true,
					})}
				/>
				<Input
					placeholder='Price'
					className=' !w-full !text-stormy'
					register={register('price', {
						required: true,
					})}
				/>
				<Input
					placeholder='Material'
					className=' !w-full !text-stormy'
					register={register('material', {
						required: true,
					})}
				/>
				<Input
					placeholder='Fabric origin'
					className=' !w-full !text-stormy'
					register={register('fabricOrigin', {
						required: true,
					})}
				/>
				<Input
					placeholder='Model'
					className=' !w-full !text-stormy'
					register={register('model', {
						required: true,
					})}
				/>
				<Select
					title='Filter'
					options={['1', '2', '3']}
					register={register('filter', {
						required: true,
					})}
				/>
			</div>
			<div className='flex flex-col grow gap-4 justify-between'>
				<Input
					placeholder='Depth'
					className=' !w-full !text-stormy'
					register={register('dimensions.depth', {
						required: true,
					})}
				/>
				<Input
					placeholder='Height'
					className=' !w-full !text-stormy'
					register={register('dimensions.height', {
						required: true,
					})}
				/>
				<Input
					placeholder='Weight'
					className=' !w-full !text-stormy'
					register={register('dimensions.weight', {
						required: true,
					})}
				/>
				<Input
					placeholder='Width'
					className=' !w-full !text-stormy'
					register={register('dimensions.width', {
						required: true,
					})}
				/>
				<Select
					title='Collection Name'
					options={['1', '2', '3']}
					register={register('collectionName')}
				/>
				<div className='grow'></div>
			</div>
			<div className='w-full flex flex-col gap-4'>
				<h5>Description</h5>
				<Textarea
					placeholder='Description'
					className=' w-full p-4 border border-oyster rounded-lg '
					register={register('description', {
						required: true,
					})}
				/>
				<h5>Full description</h5>
				<Textarea
					placeholder='Full description'
					className=' w-full p-4 border border-oyster rounded-lg '
					register={register('fullDescription')}
				/>
			</div>
			<button type='submit' className='SecondaryBtn w-full'>
				Add page
			</button>
		</form>
	);
};

export default ProductPageForm;
