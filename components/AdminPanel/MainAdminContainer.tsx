/** @format */

import { ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AuthController from './AuthController';
import AdminNavbar from './AdminNavbar';

interface MainAdminContainerProps {
	title: string;
	children?: ReactNode;
	roles?:string[];
}

const MainAdminContainer: NextPage<MainAdminContainerProps> = ({
	children,
	title,
	roles,
}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<AuthController roles={roles}>
				<AdminNavbar dark={false} />
				{children}
			</AuthController>
		</div>
	);
};

export default MainAdminContainer;
