/** @format */

import { IUser } from "./User";

export interface IUserResponse {
	user: IUser | null;
	token: string | null;
}

export interface IUserCrontext extends IUserResponse {
	login: (
		username: string,
		password: string,
		props?: (result: IUserResponse | null) => void
	) => void;
}

