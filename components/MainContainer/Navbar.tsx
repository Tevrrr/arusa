/** @format */

import type { NextPage } from 'next';
import { useEffect, useState, useContext } from 'react';
import { VscMenu } from 'react-icons/vsc';
import Bag from './Bag';
import Link from 'next/link';
import { BagContext } from '../../common/BagProvider';
import Image from 'next/image';
import { FILTERS } from '../../common/helpers/consts';

interface NavbarProps {
	className?: string;
	dark: boolean;
}

const Navbar: NextPage<NavbarProps> = ({ className = '', dark }) => {
	const { count } = useContext(BagContext);
	const [menu, setMenu] = useState(false);
	const [bag, setBag] = useState(false);
	const [scroll, setScroll] = useState(0);

	const menuToggle = (): void => {
		setMenu(!menu);
		setBag(false);
	};
	const closeNavbar = (): void => {
		setMenu(false);
		setBag(false);
	};
	const bagToggle = (): void => {
		setBag(!bag);
		setMenu(false);
	};

	const handleScroll = (): void => {
		setScroll(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<nav
				className={`z-50 fixed top-0 w-full max-h-screen ${
					dark ? ' text-white' : 'text-opal'
				}`}>
				<div
					className={` w-full flex justify-center border-oyster ${className} ${
						!(!dark || menu || bag || scroll > 250) ||
						'bg-white text-opal border-b '
					}`}>
					<div className=' h-14 w-full max-w-screen-xl flex justify-between items-center px-1 lg:px-[4.5rem] py-1 transition-all duration-150 '>
						<button
							className='TeritaryBtn px-2'
							onClick={menuToggle}>
							<VscMenu className=' text-2xl pb-1' />
							<p className='TextSmall'>Shop</p>
						</button>
						<Link
							href='/'
							className=' relative w-28 h-5 fill-opal text-opal '>
							<Image
								alt=''
								src={`/logo/${
									!dark || menu || bag || scroll > 250
										? 'dark'
										: 'light'
								}.svg`}
								width={100}
								height={100}
								className=' object-cover'
							/>
						</Link>
						<button
							className='TeritaryBtn px-2'
							onClick={bagToggle}>
							<p className='TextSmall'>Bag</p>
							<span className=' bg-opal text-white flex justify-center items-center w-6 h-6 rounded-full'>
								{count}
							</span>{' '}
						</button>
					</div>
				</div>

				{/* Menu */}
				<div
					className={`absolute -z-10 w-full top-14 bg-white text-opal flex justify-center transition-all duration-300
                             ${menu || 'translate-y-[-150%]'}`}>
					<div className=' w-full max-w-screen-xl flex items-center'>
						<div className=' min-h-screen md:min-h-max grow flex flex-col md:flex-row gap-4 md:justify-between p-4 lg:px-[5rem]'>
							<div className='flex flex-col gap-3'>
								<h4>Arusa</h4>
								<Link
									href='/'
									className='TextSmall uppercase'
									onClick={closeNavbar}>
									Home
								</Link>
								<Link
									href='/about'
									className='TextSmall uppercase'
									onClick={closeNavbar}>
									About
								</Link>
								<Link
									href='/contact'
									className='TextSmall uppercase'
									onClick={closeNavbar}>
									Contact
								</Link>
							</div>
							<div className='flex flex-col gap-3'>
								<h4>Shop</h4>
								<Link
									href='/shop'
									className='TextSmall uppercase'
									onClick={closeNavbar}>
									All
								</Link>
								<Link
									href='/collections'
									className='TextSmall uppercase'
									onClick={closeNavbar}>
									Collections
								</Link>
							</div>
							<div className='flex flex-col gap-3'>
								<h4>Collections</h4>
								{FILTERS.map((item, i) => {
									return (
										<Link
											href={{
												pathname:
													'/collections/[collectionName]',
												query: { collectionName: item },
											}}
											key={i}
											className='TextSmall uppercase '>
											{item}
										</Link>
									);
								})}
							</div>
						</div>
						<div className=' relative hidden md:block h-80 w-2/5 bg-opal'>
							<Image
								alt=''
								src='/navBg.png'
								fill
								className=' object-cover'
							/>
						</div>
					</div>
				</div>
				<div
					className={`absolute -z-10 right-0 top-14 w-full md:w-2/3 lg:w-1/2 h-full min-h-screen  
                            p-4 pb-14 lg:px-[5rem] bg-white text-opal md:border-b md:border-l border-oyster 
                            transition-all duration-300 ${
								bag || 'translate-y-[-150%]'
							}`}>
					<Bag />
				</div>
			</nav>
			<div
				onClick={closeNavbar}
				className={`absolute cursor-pointer w-full h-screen bg-stormy bg-opacity-75 z-10 ${
					menu || bag || ' hidden'
				}`}></div>
		</>
	);
};

export default Navbar;
