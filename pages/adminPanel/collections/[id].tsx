/** @format */

import type { NextPage, NextPageContext } from 'next';
import { ICollection } from '../../../common/types/collection';
import { IProduct } from '../../../common/types/product';
import { getCollectionByID } from '../../../service/getters/collection';
import { getProductsByIDs } from '../../../service/getters/product';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import Image from 'next/image';
import ProductCard from '../../../components/ProductCard';
import { AiOutlineClose } from 'react-icons/ai';
import {
	addProductInCollection,
	deleteProductFromCollection,
} from '../../../service/put/collection';
import { UserContext } from '../../../common/UserProvider';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';

interface CollectionPageProps {
	collection: ICollection;
	data: IProduct[];
}

interface IProductForm {
	id: string;
}

const CollectionPage: NextPage<CollectionPageProps> = ({
	collection,
	data,
}) => {
	const { name, filter, _id, image } = collection;
	const { register, handleSubmit } = useForm<IProductForm>();
	const { token } = useContext(UserContext);
	const [products, setProducts] = useState(data);

	const deleteProduct = (productID: string): (() => void) => {
		return async () => {
			if (token) {
				const result = await deleteProductFromCollection(
					_id,
					productID,
					token
				);
				if (result) {
					setProducts(
						products.filter((item) => item._id !== productID)
					);
				}
			}
		};
	};

	const onSubmit = handleSubmit(async (data) => {
		if (!token) return;
		const newProductPage = await addProductInCollection(
			_id,
			data.id,
			token
		);
		console.log(newProductPage);
	});

	return (
		<MainAdminContainer title='colection'>
			<div className=' mt-20 w-full max-w-screen-xl mx-auto'>
				<div className=' flex flex-col gap-0 p-2 items-center '>
					<div className=' w-full flex flex-col md:flex-row gap-4 '>
						<div className=' w-full max-w-xl h-80 bg-smoke relative text-white flex items-center justify-center flex-col'>
							<Image
								alt=''
								src={image}
								fill
								className='object-cover absolute'
							/>
							<h3>{name}</h3>
							<p className='TextLarge'>{filter}</p>
							<p className='TextRegular'>{_id}</p>
						</div>
						<form
							onSubmit={onSubmit}
							className=' flex gap-4 items-center justify-center grow'>
							<div className='flex flex-col gap-4 '>
                                <Input
                                    className=' text-black'
									placeholder='Products ID'
									register={register('id', {
										required: true,
									})}
								/>
								<button className='SecondaryBtn'>
									Add in collection
								</button>
							</div>
						</form>
					</div>

					<div className=' flex flex-wrap w-full pt-6'>
						{products?.map((item) => {
							return (
								<div
									key={item._id}
									className='max-w-[50%] lg:max-w-[33.33%] xl:max-w-[25%] w-1/2 relative'>
									<ProductCard
										data={item}
										className=' !w-full lg:!border-0 '
									/>

									<button
										onClick={deleteProduct(item._id)}
										className=' transition-all hover:scale-110 z-50 p-0 w-10 h-10 absolute -top-1 -right-1 flex justify-center items-center rounded-full bg-opal text-white'>
										<AiOutlineClose size={26} />
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</MainAdminContainer>
	);
};
{
}

export default CollectionPage;

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string;
	};
}

export const getServerSideProps = async ({ query }: PostNextPageContext) => {
	const collection = await getCollectionByID(query.id);
	const data = await getProductsByIDs(collection?.products || []);
	return {
		props: { collection, data },
	};
};
