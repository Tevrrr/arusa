/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import EmailForm from './EmailForm';

export enum textColor {
	'light' = 'text-white',
	'dark' = 'text-opal bg-white border-b',
}

interface MainContainerProps {
	title: string;
    children: ReactNode;
    color?: textColor;
    emailForm?: boolean;
    
}

const MainContainer: NextPage<MainContainerProps> = ({
	children,
	title,
	color = textColor.dark,
	emailForm = true,
}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<div className='text-white bg-white border-b text-opal' />

            <Navbar className={color} />

			<div className=' text-stormy'>{children}</div>
			{!emailForm || (
				<EmailForm/>
			)}

			<Footer />
		</div>
	);
};

export default MainContainer;
