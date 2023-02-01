import type { NextPage } from 'next'
import MainContainer from '../../components/MainContainer/MainContainer';
import Image from 'next/image';
import SideHeader from '../../components/SideHeader';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import { IClientData } from '../../common/types/clientData';
import { submitForm } from '../../service';
import { useContext } from 'react';
import { BagContext } from '../../common/BagProvider';
import { useRouter } from 'next/router';


const OrderForm: NextPage = () => {
    const { products, emptyBag } = useContext(BagContext);
    const router = useRouter()

    const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<IClientData>();
    const onSubmit = handleSubmit((data) => {
        submitForm(products, data);
        // emptyBag();
        // router.push('/shop');
    });

    return (
		<MainContainer title='Order form' emailForm={false}>
			<div className=' flex justify-center'>
				<div className=' w-full max-w-screen-xl pt-14 min-h-screen flex'>
					<SideHeader>
						<h5>Order form</h5>
					</SideHeader>
					<div className='w-1/2 relative md:block hidden m-4'>
						<Image
							alt=''
							src='/orderFormPNG/bg.png'
							fill
							className=' object-cover object-right'
						/>
					</div>
					<div className='grow flex justify-center items-center border-l border-oyster p-4'>
						<form
							className=' max-w-lg w-full flex flex-col gap-4 p-4 border border-oyster rounded-lg'
							onSubmit={onSubmit}>
							<Input
								placeholder='First name'
								className=' !w-full !text-stormy'
								register={register('firstName', {
									required: true,
									minLength: 2,
									pattern: /^[A-Za-z]+$/i,
								})}
							/>
							{!errors.firstName || (
								<p className='TextSmall'>
									You can only use letters and the length must
									be at least 2 characters.
								</p>
							)}
							<Input
								placeholder='Last name'
								className=' !w-full !text-stormy'
								register={register('lastName', {
									required: true,
									minLength: 2,
									pattern: /^[A-Za-z]+$/i,
								})}
							/>
							{!errors.lastName || (
								<p className='TextSmall'>
									You can only use letters and the length must
									be at least 2 characters.
								</p>
							) }

							{/* You can only use letters and the length must
									be at least 2 characters. */}
							<Input
								placeholder='Address'
								className=' !w-full !text-stormy'
								register={register('address')}
							/>
							{!errors.lastName || (
								<p className='TextSmall'>
									This field is required
								</p>
							)}
							<input
								type='tel'
								className='!w-full !text-stormy p-4 bg-[#0000] border rounded-lg border-oyster '
								placeholder='Phone'
								{...register('phone', {
									required: true,
									minLength: 7,
									maxLength: 20,
									pattern: /^[0-9-()]+$/i,
								})}
							/>
							{!errors.phone || (
								<p className='TextSmall'>
									You can use numbers, - and (). The field
									contains from 7 to 20 characters
								</p>
							)}
							<button type='submit' className='SecondaryBtn'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}

export default OrderForm;