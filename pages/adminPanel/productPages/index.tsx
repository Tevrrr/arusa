/** @format */

import type { NextPage } from 'next';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { IProductPage } from '../../../common/types/product';
import { useContext, useState } from 'react';
import {
	productGenerator,
	productPageGenerator,
} from '../../../common/helpers/productGenerator';
import { postProductPage } from '../../../service/posts/productPage';
import { UserContext } from '../../../common/UserProvider';

const ProductPage: NextPage = () => {
	const [newProductPage, setNewProductPage] = useState<IProductPage>();
	const { token } = useContext(UserContext);

	const generate = () => {
		setNewProductPage(productPageGenerator(productGenerator(1))[0]);
	};
	const post = () => {
		if (newProductPage && token) postProductPage(newProductPage, token);
	};

	return (
		<MainAdminContainer title='Product page'>
				<div className=' mx-auto max-w-screen-xl w-full flex gap-4 flex-col'>
					<div className=' flex gap-4 pt-20'>
						<button className='PrimaryBtn' onClick={post}>
							Post
						</button>
						<button className='PrimaryBtn' onClick={generate}>
							Generate
						</button>
					</div>
				</div>
		</MainAdminContainer>
	);
};

export default ProductPage;
