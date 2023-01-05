/** @format */

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import Bag from './Bag';
import Link from 'next/link';
interface NavbarProps {
	className?: string;
}

const Navbar: NextPage<NavbarProps> = ({ className = '' }) => {
	const [menu, setMenu] = useState(false);
	const [bag, setBag] = useState(false);
	const [scroll, setScroll] = useState(0);

	const menuToggle = (): void => {
		setMenu(!menu);
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
		<nav className={`z-50 fixed top-0 w-full max-h-screen`}>
			<div
				className={` w-full flex justify-center border-oyster ${className} ${
					!(menu || bag || scroll > 250) ||
					'bg-white text-opal border-b '
				}`}>
				<div className=' h-14 w-full max-w-screen-xl flex justify-between items-center px-1 lg:px-[4.5rem] py-1 transition-all duration-150 '>
					<button className='TeritaryBtn px-2' onClick={menuToggle}>
						<VscMenu className=' text-2xl pb-1' />
						<p className='TextSmall'>Shop</p>
					</button>
					<a href='' className='  text-5xl'>
						arusa
					</a>
					<button className='TeritaryBtn px-2' onClick={bagToggle}>
						<p className='TextSmall'>Bag</p>
						<span className=' bg-opal text-white flex justify-center items-center w-6 h-6 rounded-full'>
							1
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
							<Link href='/' className='TextSmall uppercase'>
								Home
							</Link>
							<Link href='/about' className='TextSmall uppercase'>
								About
							</Link>
							<Link href='/blog' className='TextSmall uppercase'>
								Blog
							</Link>
							<Link
								href='/contact'
								className='TextSmall uppercase'>
								Contact
							</Link>
						</div>
						<div className='flex flex-col gap-3'>
							<h4>Shop</h4>
							<Link href='/shop' className='TextSmall uppercase'>
								All
							</Link>
							<p className='TextSmall uppercase'>Lookbook</p>
							<p className='TextSmall uppercase'>Collections</p>
							<p className='TextSmall uppercase'>Featured</p>
						</div>
						<div className='flex flex-col gap-3'>
							<h4>Collections</h4>
							<p className='TextSmall uppercase'>Decors</p>
							<p className='TextSmall uppercase'>Furnitures</p>
							<p className='TextSmall uppercase'>Ceramics</p>
							<p className='TextSmall uppercase'>Lamps</p>
						</div>
					</div>
					<div className=' hidden md:block h-80 w-2/5 bg-opal'></div>
				</div>
			</div>
			<div
				className={`absolute -z-10 right-0 top-14 w-full md:w-2/3 lg:w-1/2 h-full min-h-screen md:h-[650px] md:min-h-max 
                            p-4 pb-14 lg:px-[5rem] bg-white text-opal md:border-b md:border-l border-oyster 
                            transition-all duration-300 ${
								bag || 'translate-y-[-150%]'
							}`}>
				<Bag />
			</div>
		</nav>
	);
};

export default Navbar;
