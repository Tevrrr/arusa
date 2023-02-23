/** @format */

import type { NextPage } from 'next';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../common/UserProvider';
import { getRoles } from '../../../service/getters/role';
import { registerUser } from '../../../service/posts/user';
import { toast } from 'react-hot-toast';

interface IUserForm {
	username: string;
	password: string;
	role: string;
}

const Registration: NextPage = () => {
	const { register, handleSubmit } = useForm<IUserForm>();
	const [roles, setRoles] = useState<string[]>([]);
	const { token } = useContext(UserContext);

	useEffect(() => {
		if (token && !roles.length) {
			getRoles(token, (roles) => {
				setRoles(roles);
			});
		}
	}, [token]);

	const onSubmit = handleSubmit(async (data) => {
		if (!token) return;
		const { username, password, role } = data;
		registerUser(
			username,
			password,
			role,
			token,
			(user, error) => {
				if (user) {
					toast.success('User created!', {
						position: 'bottom-center',
					});
					return;
				}

				if (error) {
					toast.error(error, {
						position: 'bottom-center',
					});
				} else {
					toast.error('Error creating user!', {
						position: 'bottom-center',
					});
				}
			}
		);
	});
	return (
		<MainAdminContainer title='Registration' roles={['MAIN_ADMIN']}>
			<div className=' min-h-screen w-full flex items-center justify-center'>
				<form
					onSubmit={onSubmit}
					className=' flex gap-4 items-center justify-center p-6 border border-oyster rounded-xl'>
					<div className='flex flex-col gap-4 '>
						<Input
							className=' text-black'
							placeholder='Username'
							register={register('username', {
								required: true,
							})}
						/>
						<Input
							className=' text-black'
							placeholder='Password'
							register={register('password', {
								required: true,
							})}
						/>
						<Select
							options={roles}
							title='Role'
							register={register('role', {
								required: true,
							})}
						/>
						<button className='SecondaryBtn'>
							Register administrator
						</button>
					</div>
				</form>
			</div>
		</MainAdminContainer>
	);
};

export default Registration;
