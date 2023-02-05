/** @format */

import { ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AuthController from './AuthController';
import AdminNavbar from './AdminNavbar';

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
			<AuthController>
				<AdminNavbar dark={false} />
				{children}
			</AuthController>
		</div>
	);
};

export default MainAdminContainer;
