/** @format */

import type { NextPage } from 'next';
import { ReactNode, createContext, useEffect, useState} from 'react';
import { IUserCrontext, IUserResponse } from './types/UserContext';
import { IUser } from './types/User';
import { loginUser } from '../service/posts/login';

const initialState: IUserCrontext = {
	user: null,
	token: null,
	login: () => {},
};

export const UserContext = createContext<IUserCrontext>(initialState);

interface UserProviderProps {
	children: ReactNode;
}

const UserProvider: NextPage<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
		console.log(user);
	}, [user]);
    useEffect(() => {
        if (!token) {
            const localToken = localStorage.getItem('token')
            if (localToken) {
                setToken(localToken);
            }
        }
        else {
            localStorage.setItem('token', token);
        }


	}, [token]);
    

    const login = async (
		username: string,
		password: string,
		props?: (result: IUserResponse | null) => void
	) => {
		const result = await loginUser(username, password);
		if (result) {
            setUser(result.user);
			setToken(result.token);
		}
		if (props) props(result);
	};

	return (
		<UserContext.Provider value={{ user, token, login }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
