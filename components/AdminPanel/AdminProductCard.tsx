/** @format */

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '../../common/types/product';
import { AiFillEdit, AiFillDelete, AiFillFileText } from 'react-icons/ai';
import { deleteProductPage } from '../../service/delete/productPage';
import { useContext } from 'react';
import { UserContext } from '../../common/UserProvider';
import { ProductContext } from '../../common/ProductProvider';
import toast from 'react-hot-toast';
import imageLoader from '../../common/loader';

interface AdminProductCardProps {
	data: IProduct;
	className?: string;
	imageClassName?: string;
}
//
const AdminProductCard: NextPage<AdminProductCardProps> = ({
	className = '',
	imageClassName = '',
	data,
}) => {
	const { title, price, _id, mainImage, sellability, filter } = data;
	const { updateProducts } = useContext(ProductContext);
	const { token } = useContext(UserContext);

	const deletePage = async () => {
		if (!token) return;
		deleteProductPage(_id, token, (page, error) => {
			if (page) {
				toast.success('Page deleted!', {
					position: 'bottom-center',
				});
				return;
			}

			if (error) {
				toast.error(error, {
					position: 'bottom-center',
				});
			} else {
				toast.error('Page deletion error!', {
					position: 'bottom-center',
				});
			}
		});
		updateProducts();
	};


	return (
		<div className={` w-full flex p-4 gap-4 ${className}`}>
			<div className=' w-56 h-56 relative shrink-0 overflow-hidden'>
				<Image
					loader={imageLoader}
					alt=''
					src={mainImage}
					fill
					className={`object-cover ${imageClassName}`}
				/>
			</div>
			<div className='flex flex-col justify-between'>
				<div className='flex flex-col gap-2'>
					<p className='TextRegular uppercase'>{title}</p>
					<p className='TextRegular'>ID: {_id}</p>
					<p className='TextRegular'>${price}</p>
					<p className='TextRegular'>Sellability: {sellability}</p>
					<p className='TextRegular'>Filter: {filter}</p>
				</div>
				<div className='flex items-baseline flex-wrap gap-4'>
					<Link
						href={{
							pathname: '/shop/[id]',
							query: { id: _id },
						}}>
						<button className='OutlinedBtn normal-case'>
							Open <AiFillFileText size={25} />
						</button>
					</Link>
					<Link
						href={{
							pathname: '/adminPanel/productPages/[id]',
							query: { id: _id },
						}}>
						<button className='PrimaryBtn normal-case'>
							Edit <AiFillEdit size={25} />
						</button>
					</Link>
					<button
						onClick={deletePage}
						className='SecondaryBtn normal-case'>
						Delete <AiFillDelete size={25} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminProductCard;
