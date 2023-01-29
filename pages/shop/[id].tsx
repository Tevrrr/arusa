/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../components/MainContainer/MainContainer';
import { IProductPage } from '../../common/types/product';
import { getProductPage } from '../../service';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { BagContext } from '../../common/BagProvider';
import { IProductPageToIProduct } from '../../common/helpers/IProductPageToIProduct';
import Slider from '../../components/Shop/Slider';
import Image from 'next/image';

interface ProductProps {
	data: IProductPage | null;
}

const Product: NextPage<ProductProps> = ({ data}) => {
	const router = useRouter();
	const { addProduct } = useContext(BagContext);

	useEffect(() => {
		if (!data) {
			router.push('/404');
		}
	}, []);

	const onClickAdd = () => {
		if (data) {
			addProduct(IProductPageToIProduct(data));
		}
	};

	return data ? (
		<MainContainer title={data.title} emailForm={true}>
			<div className='pt-14 flex justify-center'>
				<div className=' max-w-screen-xl w-full flex flex-col lg:flex-row'>
					<div className=' flex justify-center lg:w-1/2 h-[600px] lg:h-[700px] px-4 py-6 lg:border-r border-oyster'>
						<Slider images={[data.mainImage, ...data.images]} />
					</div>
					<div className='grow flex justify-center items-center p-4'>
						<div className=' max-w-lg  flex flex-col gap-4 text-opal'>
							<h3 className=' text-stormy'>
								{data.title}
							</h3>
							<p className='TextRegular uppercase text-stormy'>
								{data.material}
							</p>
							<p className='TextRegular'>{data.description}</p>
							<p className='TextLarge'>${data.price}</p>
							<button
								className='SecondaryBtn uppercase'
								onClick={onClickAdd}>
								Add to bag
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className=' flex justify-center bg-opal text-oyster'>
				<div className=' max-w-screen-xl w-full flex flex-col py-2 gap-2 md:flex-row-reverse md:min-h-screen'>
					<div className='md:w-1/2 flex items-center justify-center'>
						<div className=' relative w-80 h-80 bg-smoke overflow-hidden md:rounded-lg rounded-md'>
							<Image
								alt=''
								src='/mockups/size.jpg'
								fill
								className=' object-cover'
							/>
						</div>
					</div>
					<div className='md:w-1/2 flex justify-center items-center'>
						<div className='flex flex-col gap-4 p-2 max-w-lg'>
							<p className='TextRegular uppercase'>Description</p>
							<p className='TextRegular'>
								{data.fullDescription || data.description}
							</p>
							<div className='TextRegular uppercase '>
								<p>Height(cm):{data.dimensions.height}</p>
								<p>Width(cm):{data.dimensions.width}</p>
								<p>Depth(cm):{data.dimensions.depth}</p>
								<p>Weight:{data.dimensions.weight}</p>
								<p>Model:{data.model}</p>
								<p>Fabric origin {data.fabricOrigin}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainContainer>
	) : (
		<></>
	);
};

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string;
	};
}

export const getServerSideProps = async ({req, query }: PostNextPageContext) => {
	const data: IProductPage | null = await getProductPage(
		Number.parseInt(query.id)
    );
	return {
		props: { data },
	};
};

export default Product;
