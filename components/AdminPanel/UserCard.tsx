/** @format */

import type { NextPage } from 'next';
import { IUser } from '../../common/types/User';
import { AiFillDelete, AiOutlineClose, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import Select from '../Select';
import { useMemo, useState } from 'react';
interface UserCardProps {
	data: IUser;
	roles: string[];
	setUser: (user: IUser) => void;
	deleteUser: (id: string) => void;
}

const UserCard: NextPage<UserCardProps> = ({
	data,
	roles,
	setUser,
	deleteUser,
}) => {
	const { username, _id, roles: userRoles } = data;
	const [delUser, setDelUser] = useState(false);
	const inactiveRoles = useMemo(() => {
		return roles.filter((item) => !userRoles.includes(item));
	}, [roles, userRoles]);
	const [addedRole, setAddedRole] = useState<string>(inactiveRoles[0]);
	const [deletedRole, setDeletedRole] = useState<string>(userRoles[0]);

	const deleteRole = () => {
		setUser({
			...data,
			roles: userRoles.filter((item) => item !== deletedRole),
		});
	};
	const addRole = () => {
		setUser({
			...data,
			roles: [...userRoles, addedRole],
		});
	};

	return (
		<div className=' relative flex gap-4 p-2 w-full lg:w-1/2'>
			{delUser || (
				<button
					onClick={() => setDelUser(true)}
					className=' transition-all hover:scale-110 p-0 w-10 h-10 absolute top-2 right-2 flex justify-center items-center rounded-full bg-opal text-white'>
					<AiOutlineClose size={26} />
				</button>
			)}
			{!delUser || (
				<div
					onClick={() => setDelUser(false)}
					className=' absolute w-full h-full top-0 left-0 z-10 bg-stormy bg-opacity-50 flex flex-col gap-4 items-center justify-center'>
					<button
						className='PrimaryBtn w-44'
						onClick={() => deleteUser(_id)}>
						Delete user
					</button>
					<button
						className='SecondaryBtn w-44'
						onClick={() => setDelUser(false)}>
						Cancel
					</button>
				</div>
			)}

			<div className=' w-48 h-48 bg-linen flex items-center justify-center'>
				<AiOutlineUser size={50} />
			</div>
			<div className='grow flex flex-col justify-between gap-2 shrink-0'>
				<h5>{username}</h5>
				<p className='TextRegular'>{_id}</p>
				<div className='flex gap-2'>
					<Select
						value={deletedRole}
						setValue={setDeletedRole}
						options={userRoles}
					/>
					<button
						className='SecondaryBtn normal-case w-36 shrink-0'
						onClick={deleteRole}
						disabled={deletedRole === '' || !deletedRole}>
						Delete <AiFillDelete size={25} />
					</button>
				</div>
				<div className='flex gap-2'>
					<Select
						value={addedRole}
						setValue={setAddedRole}
						options={inactiveRoles}
					/>
					<button
						className='SecondaryBtn normal-case w-36 shrink-0'
						onClick={addRole}
						disabled={addedRole === '' || !addedRole}>
						Add <AiOutlinePlus size={25} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
