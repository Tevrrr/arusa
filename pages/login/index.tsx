/** @format */

import type { NextPage } from 'next';
import MainContainer from '../../components/MainContainer/MainContainer';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';
import { UserContext } from '../../common/UserProvider';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

interface ILoginForm {
	username: string;
	password: string;
}
// if (user) router.push('/adminPanel');
const OrderForm: NextPage = () => {
	const { login, checkLocalToken, user } = useContext(UserContext);
	const [error, setError] = useState('');
	const router = useRouter();
	const { register, handleSubmit } = useForm<ILoginForm>();

	useEffect(() => {
		if (user) {
			// router.push('/adminPanel/orders');
		} else {
			checkLocalToken((user) => {
				// if (user) router.push('/adminPanel/orders');
			});
		}
	}, []);

	const onSubmit = handleSubmit((data) => {
		login(data.username, data.password, (result) => {
			if (!result) {
				setError('Invalid username or password!');
			} else {
				setError('Access');
				router.push('/adminPanel/orders');
			}
		});
	});

	return (
		<MainContainer title='Login' emailForm={false}>
			<div className='mx-auto w-full max-w-screen-xl pt-14 min-h-screen flex'>
				<div className='grow flex justify-center items-center border-l border-oyster p-4'>
					<form
						className=' max-w-lg w-full flex flex-col gap-4 p-4 border border-oyster rounded-lg'
						onSubmit={onSubmit}>
						<Input
							placeholder='Username'
							className=' !w-full !text-stormy'
							register={register('username', {
								required: true,
							})}
						/>
						<input
							type='password'
							className='!w-full !text-stormy p-4 bg-[#0000] border rounded-lg border-oyster '
							placeholder='Password'
							{...register('password', {
								required: true,
							})}
						/>
						<button type='submit' className='SecondaryBtn'>
							Login
						</button>
						{!user || (
							<Link href='/adminPanel/orders'>
								<button type='button' className='PrimaryBtn w-full'>
									Login using token
								</button>
							</Link>
						)}

						{!error || <p className='TextSmall'>{error}</p>}
					</form>
				</div>
			</div>
		</MainContainer>
	);
};

export default OrderForm;
