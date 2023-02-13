/** @format */

import type { NextPage, NextPageContext } from 'next';
import { IProductPage } from '../../../common/types/product';
import { FormProvider, useForm } from 'react-hook-form';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import ProductPageForm from '../../../components/AdminPanel/ProductPageForm';
import { getProductPage } from '../../../service';
import { useContext } from 'react';
import { UserContext } from '../../../common/UserProvider';
import { getFilters } from '../../../service/getters/filter';
import { ICollection } from '../../../common/types/collection';
import { putProductPage } from '../../../service/put/productPage';
import { register } from 'ts-node';
import { IProductPageForm } from '../../../common/types/IProductPageForm';

interface UpdatePageProps {
	data: IProductPage;
	filters: string[];
	collections: ICollection[];
}

const UpdatePage: NextPage<UpdatePageProps> = ({ data, filters }) => {
        const methods = useForm<IProductPageForm>({
			defaultValues: data,
		});
		const { handleSubmit, setValue } = methods;
	const { token } = useContext(UserContext);

	const onSubmit = handleSubmit(async (data) => {
		if (!token) return;
		const newProductPage = await putProductPage({ ...data }, token, data.mainImageFile[0], data.imageFiles);
		console.log(newProductPage);
	});

	return (
        <MainAdminContainer title='update product page'>
            <FormProvider {...methods}>
                <ProductPageForm
                requiredImages={false}
				filters={filters}
				onSubmit={onSubmit}
			/>
            </FormProvider>
			
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
    	const filters = await getFilters();
	console.log(data);
	return {
		props: { data, filters },
	};
};
