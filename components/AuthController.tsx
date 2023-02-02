/** @format */

import { useRouter } from 'next/router';
import { UserContext } from '../common/UserProvider';
import { FunctionComponent, ReactNode, useContext, useEffect } from 'react';
import { NextPage } from 'next';

interface AuthControllerProps {
	children: ReactNode;
}

const AuthController: NextPage<AuthControllerProps> = ({ children }) => {
	const { user } = useContext(UserContext);
	const router = useRouter();
	useEffect(() => {
		if (!user) router.push('/login');
    }, [user]);
    
	if (user) {
		return <>{children}</>;
	}

	return <></>;
};

export default AuthController;
