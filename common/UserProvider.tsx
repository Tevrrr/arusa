/** @format */

import type { NextPage } from 'next';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { IUserCrontext, IUserResponse } from './types/UserContext';
import { IUser } from './types/User';
import { loginUser } from '../service/posts/login';
import { loginUserByToken } from '../service/getters/loginByToken';

const initialState: IUserCrontext = {
	user: null,
	token: null,
	login: () => {},
	checkLocalToken: () => {},
};

export const UserContext = createContext<IUserCrontext>(initialState);

interface UserProviderProps {
	children: ReactNode;
}

const UserProvider: NextPage<UserProviderProps> = ({ children }) => {
	const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    
	useEffect(() => {
		if (token) {
			localStorage.setItem('token', token);
		}
	}, [token]);

	const checkLocalToken = async (
		props?: (user: IUser | null, token: string) => void
	) => {
		if (token) return;
		const localToken = localStorage.getItem('token');
		if (localToken) {
			try {
				const user = await loginUserByToken(localToken);
				if (user) {
					setToken(localToken);
					setUser(user);
				}

				if (props) props(user, localToken);
				console.log(user, localToken);
			} catch (error) {}
		}
	};

	const login = async (
		username: string,
		password: string,
		props?: (result: IUserResponse | null) => void
	) => {
		const result = await loginUser(username, password);
		if (result) {
			setUser(result.user);
            setToken(result.token);
            localStorage.setItem('token', result.token || '');
		}
		if (props) props(result);
	};

	return (
		<UserContext.Provider value={{ user, token, login, checkLocalToken }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
