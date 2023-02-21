/** @format */

import { useRouter } from 'next/router';
import { UserContext } from '../../common/UserProvider';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { IUser } from '../../common/types/User';

interface AuthControllerProps {
	children: ReactNode;
	roles?: string[];
}

const AuthController: NextPage<AuthControllerProps> = ({ children, roles }) => {
	const { user, checkLocalToken } = useContext(UserContext);
	const router = useRouter();
	const [access, setAccess] = useState(false);
    const chekRoles = (user: IUser) => {
        if (roles) {
            const result = user.roles.findIndex((item) => {
				return roles.includes(item);
			});
			setAccess(result !== -1);
		} else {
			setAccess(true);
		}
		
	};
	useEffect(() => {
		if (!user)
			checkLocalToken((user) => {
				if (!user) router.push('/login');
				else {
                    chekRoles(user);
				}
            });
        else {
            chekRoles(user);
        }
	}, [user]);

	if (access) {
		return <>{children}</>;
	}

	return <></>;
};

export default AuthController;
