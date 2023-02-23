/** @format */

import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FILTERS } from '../../common/helpers/consts';

const Footer: NextPage = () => {
	return (
		<footer className='flex flex-col text-cloudy bg-opal pt-16 md:pt-0 pb-6'>
			<div className='flex flex-wrap border-y md:border-t-0 border-oyster'>
				<div className=' w-1/2 md:w-auto flex grow flex-col gap-4 p-4 md:py-6 md:pl-14 border-r border-oyster '>
					<p className='TextSmall uppercase'>Store</p>
					<Link href='/'>
						<p className='TextSmall cursor-pointer'>Home</p>
					</Link>
					<Link href='/about'>
						<p className='TextSmall cursor-pointer'>About</p>
					</Link>
					<Link href='/contact'>
						<p className='TextSmall cursor-pointer'>Contact</p>
					</Link>
				</div>
				<div className=' w-1/2 md:w-auto flex grow flex-col gap-4 p-4 md:py-6 md:pl-14 md:border-r border-oyster '>
					<p className='TextSmall uppercase'>Shop</p>
					<Link href='/shop'>
						<p className='TextSmall cursor-pointer'>All</p>
					</Link>
					<Link href='/collections'>
						<p className='TextSmall cursor-pointer'>Collections</p>
					</Link>
				</div>
				<div className=' w-1/2 md:w-auto flex grow flex-col gap-4 p-4 md:py-6 md:pl-14 border-t md:border-t-0 border-r border-oyster '>
					<p className='TextSmall uppercase'>Collections</p>
					{FILTERS.map((item, i) => {
						return (
							<Link
								href={{
									pathname: '/collections/[collectionName]',
									query: { collectionName: item },
								}}
								key={i}
								className='TextSmall '>
								{item}
							</Link>
						);
					})}
				</div>
				<div className=' w-1/2 md:w-auto flex grow flex-col gap-4 p-4 md:py-6 md:pl-14 border-t md:border-t-0 '>
					<p className='TextSmall uppercase'>Help</p>
					<Link href='/contact'>
						<p className='TextSmall cursor-pointer'>Contact</p>
					</Link>
					<Link href='/login'>
						<p className='TextSmall cursor-pointer'>Login</p>
					</Link>
				</div>
			</div>
			<div className=' flex items-center justify-center relative md:my-10 m-4 min-h-[33vh]  '>
				<Image alt='' src='/logo/light.svg' fill className=' ' />
			</div>
			<p className='TextSmall py-6 text-center uppercase border-y border-oyster'>
				© ARUSA 2022 | Agatha Sakowicz
			</p>
		</footer>
	);
};

export default Footer;
