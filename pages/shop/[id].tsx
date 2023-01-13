/** @format */

import type { NextPage, NextPageContext } from 'next';
import MainContainer from '../../components/MainContainer/MainContainer';
import { IProductPage } from '../../common/types/product';
import { getProductPage } from '../../service';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { BagContext } from '../../common/BagProvider';

interface ProductProps {
	data: IProductPage | null;
}

const Product: NextPage<ProductProps> = ({ data }) => {
	const router = useRouter();
	const { addProduct } = useContext(BagContext);

	useEffect(() => {
		if (!data) {
			router.push('/404');
		}
	}, []);

	const onClickAdd = () => {
		if (data) {
			addProduct(data);
		}
	};

	return data ? (
		<MainContainer title='{Product}' emailForm={false}>
			<div className='pt-14 flex justify-center'>
				<div className=' max-w-screen-xl w-full flex'>
					<div className='w-1/2 h-[500px] bg-smoke'></div>
					<div className='grow flex justify-center items-center'>
						<div className=' max-w-lg  flex flex-col gap-4 text-opal'>
							<h3 className=' text-stormy'>
								{data.title}
								{data.id}
							</h3>
							<p className='TextRegular uppercase text-stormy'>
								Triple wardrobe, mango wood
							</p>
							<p className='TextRegular'>
                                {data.description}
							</p>
							<div className='flex justify-between items-center'>
								<p className='TextLarge'>${data.price}</p>
								<p className='TextRegular uppercase'>
									Size guide
								</p>
							</div>
							<div className='flex justify-between gap-1'>
								<button className='OutlinedBtn py-1 grow'>
									<p className='TextSmall'>40x40</p>
								</button>
								<button className='OutlinedBtn py-1 grow'>
									<p className='TextSmall'>80x80</p>
								</button>
								<button className='OutlinedBtn py-1 grow'>
									<p className='TextSmall'>100x100</p>
								</button>
								<button className='OutlinedBtn py-1 grow'>
									<p className='TextSmall'>120x120</p>
								</button>
							</div>
							<button
								className='SecondaryBtn uppercase'
								onClick={onClickAdd}>
								Add to bag
							</button>
							<div className='flex'>
								<button className='OutlinedBtn py-1 grow rounded-r-none'>
									<p className='TextSmall uppercase'>
										Description
									</p>
								</button>
								<button className='OutlinedBtn py-1 grow rounded-none !border-x-0'>
									<p className='TextSmall uppercase'>
										Description
									</p>
								</button>
								<button className='OutlinedBtn py-1 grow rounded-l-none'>
									<p className='TextSmall uppercase'>
										Description
									</p>
								</button>
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

export const getServerSideProps = async ({ query }: PostNextPageContext) => {
	const data: IProductPage | null = await getProductPage(
		Number.parseInt(query.id)
	);

	return {
		props: { data },
	};
};

export default Product;
