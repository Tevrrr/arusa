/** @format */

import { useRouter } from 'next/router';
import { UserContext } from '../../common/UserProvider';
import { ReactNode, useContext, useEffect } from 'react';
import { NextPage } from 'next';

interface AuthControllerProps {
	children: ReactNode;
}

const AuthController: NextPage<AuthControllerProps> = ({ children }) => {
	const { user, checkLocalToken } = useContext(UserContext);
	const router = useRouter();
	useEffect(() => {
		if (!user)
			checkLocalToken((user) => {
                if (!user) router.push('/login');
			});
	}, [user]);

	if (user) {
		return <>{children}</>;
	}

	return <></>;
};

export default AuthController;
