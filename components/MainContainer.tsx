/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface MainContainerProps {
	title: string;
	children: ReactNode;
}

const MainContainer: NextPage<MainContainerProps> = ({ children, title }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
            </Head>
            <Navbar/>
			{children}
		</div>
	);
};

export default MainContainer;
