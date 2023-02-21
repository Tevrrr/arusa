/** @format */

import type { NextPage } from 'next';
import { useEffect, useState, useContext } from 'react';
import { VscMenu } from 'react-icons/vsc';
import Link from 'next/link';
import { BagContext } from '../../common/BagProvider';
import Image from 'next/image';
import { UserContext } from '../../common/UserProvider';

interface AdminNavbarProps {
	className?: string;
	dark: boolean;
}

const AdminNavbar: NextPage<AdminNavbarProps> = ({ className = '', dark }) => {
    const { user} = useContext(UserContext)
	const [scroll, setScroll] = useState(0);

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
						!(!dark || scroll > 250) ||
						'bg-white text-opal border-b '
					}`}>
					<div className=' h-14 w-full max-w-screen-xl flex justify-between items-center px-2 lg:px-[4.5rem] py-1 transition-all duration-150 '>
						<Link
							href='/'
							className=' relative w-28 h-5 fill-opal text-opal '>
							<Image
								alt=''
								src={`/logo/${
									!dark || scroll > 250 ? 'dark' : 'light'
								}.svg`}
								width={100}
								height={100}
								className=' object-cover'
							/>
						</Link>
						<div className='flex gap-4'>
							{user && user.roles?.includes('MAIN_ADMIN') ? (
								<Link href='/adminPanel/admins'>
									Admins
								</Link>
							) : (
								<></>
							)}

							<Link href='/adminPanel/productPages'>
								Products
							</Link>
							<Link href='/adminPanel/orders'>Orders</Link>
							<Link href='/adminPanel/collections'>
								Collections
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default AdminNavbar;
