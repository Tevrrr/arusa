/** @format */

import type { NextPage } from 'next';
import { VscMenu } from 'react-icons/vsc';
interface NavbarProps {}

const Navbar: NextPage<NavbarProps> = () => {
	return (
		<nav className=' z-50 absolute top-0 w-full flex justify-center '>
			<div className=' flex justify-between items-center max-w-screen-xl w-full px-1 md:px-[4.5rem] py-4  text-sm'>
				<button className='TeritaryBtn px-2'>
					<VscMenu className=' text-2xl pb-1' />
					<p className='Small'>Shop</p>
				</button>
				<a href='' className='  text-5xl'>
					arusa
				</a>
				<button className='TeritaryBtn px-2'>
					<p className='Small'>Bag</p>
					<span className=' bg-opal text-white flex justify-center items-center w-6 h-6 rounded-full'>
						1
					</span>{' '}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
