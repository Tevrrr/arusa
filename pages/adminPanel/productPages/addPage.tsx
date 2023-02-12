/** @format */

import type { NextPage, NextPageContext } from 'next';
import { IProductPage } from '../../../common/types/product';
import {  useForm } from 'react-hook-form';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import ProductPageForm from '../../../components/AdminPanel/ProductPageForm';
import { productPageGenerator, productGenerator } from '../../../common/helpers/productGenerator';
import { useContext } from 'react';
import { UserContext } from '../../../common/UserProvider';
import { postProductPage } from '../../../service/posts/productPage';
import { ICollection } from '../../../common/types/collection';
import { getFilters } from '../../../service/getters/filter';
import { getCollection } from '../../../service/getters/collection';


interface AddPageProps {
	filters: string[];
	collections: ICollection[];
}

const AddPage: NextPage<AddPageProps> = ({filters, collections}) => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { touchedFields },
	} = useForm<IProductPage>();
	const { token } = useContext(UserContext);
	const generate = () => {
		const page = productPageGenerator(productGenerator(1))[0];

		setValue('dimensions', page.dimensions);
		setValue('fabricOrigin', page.fabricOrigin);
		setValue('collectionCode', page.collectionCode);
		setValue('filter', page.filter);
		setValue('material', page.material);
		setValue('description', page.description);
		setValue('fullDescription', page.fullDescription);
		setValue('model', page.model);
		setValue('price', page.price);
		setValue('title', page.title);
	};
	const onSubmit = handleSubmit(async (data) => {
		if (!token) return;
		const newProductPage = await postProductPage({...data, mainImage: '/asaa', images: []}, token);
		console.log(newProductPage);
	});

	return (
		<MainAdminContainer title='Add product page'>
			<button className='PrimaryBtn mt-16' onClick={generate}>
				Generate
			</button>
			<ProductPageForm
				filters={filters}
				collections={collections}
				onSubmit={onSubmit}
				register={register}
			/>
		</MainAdminContainer>
	);
};

export default AddPage;

export const getServerSideProps = async () => {
	const filters = await getFilters();
	const collections = await getCollection();
	return {
		props: { filters, collections },
	};
};
