/** @format */

import type { NextPage } from 'next';
import { IProductPage } from '../../../common/types/product';
import {  useForm } from 'react-hook-form';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import ProductPageForm from '../../../components/AdminPanel/ProductPageForm';
import { productPageGenerator, productGenerator } from '../../../common/helpers/productGenerator';

const AddPage: NextPage = () => {
	const { register, handleSubmit, setValue, formState: { touchedFields } } = useForm<IProductPage>();

    	const generate = () => {
            const page = productPageGenerator(productGenerator(1))[0];

            setValue('dimensions', page.dimensions);
            setValue('fabricOrigin', page.fabricOrigin);
            setValue('collectionName', page.collectionName);
            setValue('filter', page.filter);
            setValue('material', page.material);
            setValue('description', page.description);
            setValue('fullDescription', page.fullDescription);
            setValue('model', page.model);
            setValue('price', page.price);
            setValue('title', page.title);


		};
	const onSubmit = handleSubmit((data) => {});

	return (
        <MainAdminContainer title='Add product page'>
            
			<button className='PrimaryBtn mt-16' onClick={generate}>
				Generate
			</button>
			<ProductPageForm onSubmit={onSubmit} register={register} />
		</MainAdminContainer>
	);
};

export default AddPage;
