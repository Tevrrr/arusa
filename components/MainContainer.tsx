/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from './Navbar';

export enum textColor {
	'light' = 'text-white',
	'dark' = 'text-opal',
}

interface MainContainerProps {
	title: string;
    children: ReactNode;
    color?: textColor;
    
}

const MainContainer: NextPage<MainContainerProps> = ({
	children,
	title,
	color = textColor.dark,
}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<div className='text-white text-opal' />
			<div className={color}>
				<Navbar />
			</div>

			{children}
		</div>
	);
};

export default MainContainer;
