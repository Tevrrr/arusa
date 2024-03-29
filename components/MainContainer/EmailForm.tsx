/** @format */

import type { NextPage } from 'next';
import Image from 'next/image';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEXP } from '../../common/helpers/consts';
import { postEmail } from '../../service/posts/email';
import toast from 'react-hot-toast';

type IEmailForm = {
	email: string;
};

const EmailForm: NextPage = () => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<IEmailForm>();
    const onSubmit = handleSubmit((data) => {
        postEmail(data.email, (email, error) => {
			if (email) {
				toast.success('Email added!', {
					position: 'bottom-center',
                });
                setValue('email', '');
				return;
			}

			if (error) {
				toast.error(error, {
					position: 'bottom-center',
				});
			} else {
				toast.error('Error adding email!', {
					position: 'bottom-center',
				});
			}
		});
        
    });

	return (
		<div className='flex justify-center'>
			<div className=' w-full max-w-screen-xl md:px-14 md:py-20'>
				<form
					onSubmit={onSubmit}
					className='relative flex flex-col justify-center items-center text-center gap-12 w-full h-[42rem] text-cloudy'>
					<div className=' absolute w-full h-full -z-10'>
						<Image
							alt=''
							src='/formBg.png'
							fill
							className=' object-cover'
						/>
					</div>

					<h2>
						Be part of our club <br /> for discount
					</h2>
					<div className='flex flex-col gap-2'>
						<Input
							placeholder='YOUR EMAIL'
							register={register('email', {
								required: true,
								minLength: 5,
								pattern: EMAIL_REGEXP,
							})}
						/>
						{!errors.email || (
							<p className='TextRegular'>
								Please enter a valid email
							</p>
						)}
					</div>

					<button
						type='submit'
						disabled={!!errors.email}
						className='SecondaryBtn'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default EmailForm;
