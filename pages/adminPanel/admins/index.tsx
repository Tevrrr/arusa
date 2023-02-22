/** @format */

import type { NextPage } from 'next';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { IUser } from '../../../common/types/User';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../common/UserProvider';
import { getUsers } from '../../../service/getters/user';
import uniqid from 'uniqid';
import UserCard from '../../../components/AdminPanel/UserCard';
import { getRoles } from '../../../service/getters/role';
import { deleteUser } from '../../../service/delete/user';
import { putUser } from '../../../service/put/user';
import {
	AiOutlineUser,
} from 'react-icons/ai';
import Link from 'next/link';

const Admins: NextPage = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [roles, setRoles] = useState<string[]>([]);
	const { token } = useContext(UserContext);

	useEffect(() => {
		if (token && !users.length) {
			getUsers(token, (users) => {
				setUsers(users);
			});
		}
		if (token && !roles.length) {
			getRoles(token, (roles) => {
				setRoles(roles);
			});
		}
	}, [token]);

    const setUser = async (user: IUser) => {
        if (!token) return;
        const result = await putUser(user, token);
		if (result) {
			const newUsers = users.map((item) => {
				if (item._id !== user._id) return item;
				else return user;
			});
			setUsers(newUsers);
		}
		
	};
    const delUser = async (id: string) => {
        if (!token) return;
		const result = await deleteUser(id, token);
		if (result) {
			const newUsers = users.filter((item) => item._id !== id);
			setUsers(newUsers);
		}
	};

	return (
		<MainAdminContainer title='Admins' roles={['MAIN_ADMIN']}>
			<div className=' pt-20 max-w-screen-xl w-full mx-auto flex flex-wrap p-4'>
				<Link href='/adminPanel/admins/registration' className=' relative flex gap-4 p-2 w-full lg:w-1/2'>
					<div className=' w-48 h-48 bg-linen flex items-center justify-center'>
						<AiOutlineUser size={50} />
					</div>
					<div className='grow flex items-center justify-center gap-2 shrink-0'>
						<h5>Add a new admin</h5>
					</div>
				</Link>
				{users.map((item) => {
					return (
						<UserCard
							setUser={setUser}
							deleteUser={delUser}
							data={item}
							roles={roles}
							key={uniqid(item.username)}
						/>
					);
				})}
			</div>
		</MainAdminContainer>
	);
};

export default Admins;
