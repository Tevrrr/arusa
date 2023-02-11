/** @format */

import type { NextPage, NextPageContext } from 'next';
import { IProductPage } from '../../../common/types/product';
import { useForm } from 'react-hook-form';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import ProductPageForm from '../../../components/AdminPanel/ProductPageForm';
import { getProductPage } from '../../../service';

interface UpdatePageProps{
    data: IProductPage;
}

const UpdatePage: NextPage<UpdatePageProps> = ({ data }) => {
	const { register, handleSubmit } = useForm<IProductPage>({
		defaultValues: data,
	});

	const onSubmit = handleSubmit((data) => {});

	return (
		<MainAdminContainer title='update product page'>
			<ProductPageForm onSubmit={onSubmit} register={register} />
		</MainAdminContainer>
	);
};

export default UpdatePage;

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string;
	};
}

export const getServerSideProps = async ({
	req,
	query,
}: PostNextPageContext) => {
	const data: IProductPage | null = await getProductPage(query.id);
	console.log(data);
	return {
		props: { data },
	};
};
