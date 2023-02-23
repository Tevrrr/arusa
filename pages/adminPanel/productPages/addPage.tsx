/** @format */

import type { NextPage, NextPageContext } from 'next';
import { IProductPage } from '../../../common/types/product';
import {  FormProvider, useForm } from 'react-hook-form';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import ProductPageForm from '../../../components/AdminPanel/ProductPageForm';
import { productPageGenerator, productGenerator } from '../../../common/helpers/productGenerator';
import { useContext } from 'react';
import { UserContext } from '../../../common/UserProvider';
import { postProductPage } from '../../../service/posts/productPage';
import { getFilters } from '../../../service/getters/filter';
import { IProductPageForm } from '../../../common/types/IProductPageForm';
import toast from 'react-hot-toast';


interface AddPageProps {
	filters: string[];
}



const AddPage: NextPage<AddPageProps> = ({filters}) => {
    const methods = useForm<IProductPageForm>();
    const {  handleSubmit, setValue } = methods;
	const { token } = useContext(UserContext);
	const generate = () => {
		const page = productPageGenerator(productGenerator(1))[0];

		setValue('dimensions', page.dimensions);
		setValue('fabricOrigin', page.fabricOrigin);
		setValue('filter', page.filter);
		setValue('material', page.material);
		setValue('description', page.description);
		setValue('fullDescription', page.fullDescription);
		setValue('model', page.model);
		setValue('price', page.price);
		setValue('title', page.title);
	};
    const onSubmit = handleSubmit(async (data) => {


		postProductPage(
			{ ...data },
			token || '',
			data.mainImageFile[0],
			data.imageFiles,
			(page, error) => {
				if (page) {
					toast.success('Page created!', {
						position: 'bottom-center',
					});
					return;
				}

				if (error) {
					toast.error(error, {
						position: 'bottom-center',
					});
				} else {
					toast.error('Error creating page!', {
						position: 'bottom-center',
					});
				}
			}
		);

	});

	return (
		<MainAdminContainer title='Add product page'>
			<button className='PrimaryBtn mt-16' onClick={generate}>
				Generate
			</button>
			<FormProvider {...methods}>
				<ProductPageForm
					filters={filters}
					onSubmit={onSubmit}
				/>
			</FormProvider>
		</MainAdminContainer>
	);
};

export default AddPage;

export const getServerSideProps = async () => {
	const filters = await getFilters();

	return {
		props: { filters},
	};
};
