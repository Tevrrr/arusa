
import {  ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AuthController from './AuthController';

interface MainAdminContainerProps {
	title: string;
	children: ReactNode;
}

const MainAdminContainer: NextPage<MainAdminContainerProps> = ({
	children,
	title,
}) => {
    
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<AuthController>{children}</AuthController>
		</div>
	);
};

export default MainAdminContainer;
