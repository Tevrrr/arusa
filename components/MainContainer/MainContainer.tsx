/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import EmailForm from './EmailForm';
import BagProvider from '../../common/BagProvider';

export enum textColor {
	'light' = 'text-white',
	'dark' = 'text-opal bg-white border-b',
}

interface MainContainerProps {
	title: string;
	children: ReactNode;
	dark?: boolean;
	emailForm?: boolean;
}

const MainContainer: NextPage<MainContainerProps> = ({
	children,
	title,
	dark = false,
	emailForm = true,
}) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar dark={dark} />
			<div className=' text-stormy'>{children}</div>

			{!emailForm || <EmailForm />}

			<Footer />
		</div>
	);
};

export default MainContainer;
