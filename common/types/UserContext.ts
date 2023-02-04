/** @format */

import { IUser } from "./User";

export interface IUserResponse {
	user: IUser | null;
	token: string | null;
}

export interface IUserCrontext extends IUserResponse {
    checkLocalToken: (props?: (user: IUser | null, token: string) => void)=>void;
	login: (
		username: string,
		password: string,
		props?: (result: IUserResponse | null) => void
	) => void;
}

