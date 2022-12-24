/** @format */

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import Bag from './Bag';
interface NavbarProps {}

const Navbar: NextPage<NavbarProps> = () => {
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
		<nav className=' z-50 fixed top-0 w-full max-h-screen'>
			<div
				className={` w-full flex justify-center  ${
					!(menu || bag || scroll > 250) ||
					'bg-white text-opal border-b border-oyster'
				}`}>
				<div className=' h-14 w-full max-w-screen-xl flex justify-between items-center px-1 lg:px-[4.5rem] py-1 transition-all duration-150 '>
					<button className='TeritaryBtn px-2' onClick={menuToggle}>
						<VscMenu className=' text-2xl pb-1' />
						<p className='Small'>Shop</p>
					</button>
					<a href='' className='  text-5xl'>
						arusa
					</a>
					<button className='TeritaryBtn px-2' onClick={bagToggle}>
						<p className='Small'>Bag</p>
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
							<p className='Small uppercase'>Home</p>
							<p className='Small uppercase'>About</p>
							<p className='Small uppercase'>Blog</p>
							<p className='Small uppercase'>Contact</p>
						</div>
						<div className='flex flex-col gap-3'>
							<h4>Shop</h4>
							<p className='Small uppercase'>All</p>
							<p className='Small uppercase'>Lookbook</p>
							<p className='Small uppercase'>Collections</p>
							<p className='Small uppercase'>Featured</p>
						</div>
						<div className='flex flex-col gap-3'>
							<h4>Collections</h4>
							<p className='Small uppercase'>Decors</p>
							<p className='Small uppercase'>Furnitures</p>
							<p className='Small uppercase'>Ceramics</p>
							<p className='Small uppercase'>Lamps</p>
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
