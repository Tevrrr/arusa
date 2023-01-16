import type { NextPage } from 'next'
import MainContainer from '../../components/MainContainer/MainContainer';
import Image from 'next/image';
import SideHeader from '../../components/SideHeader';
import Input from '../../components/Input';

const OrderForm: NextPage = () => {

    return (
		<MainContainer title='Order form' emailForm={false}>
			<div className=' flex justify-center'>
				<div className=' w-full max-w-screen-xl pt-14 min-h-screen flex'>
					<SideHeader>
						<h5>Order form</h5>
					</SideHeader>
					<div className='grow relative md:block hidden m-4'>
						<Image
							alt=''
							src='/orderFormPNG/bg.png'
							fill
							className=' object-cover object-right'
						/>
					</div>
					<div className='grow flex justify-center items-center border-l border-oyster p-4'>
						<form className=' max-w-lg w-full flex flex-col gap-4 p-4 border border-oyster rounded-lg'>
							<Input
								placeholder='Name'
								className=' !w-full !text-stormy'
							/>
							<Input
								placeholder='Surname'
								className=' !w-full !text-stormy'
							/>
							<Input
								placeholder='Address'
								className=' !w-full !text-stormy'
							/>

							<input
								type='tel'
                                className='!w-full !text-stormy p-4 bg-[#0000] border rounded-lg border-oyster '
                                placeholder='Phone'
							/>
							<button className='SecondaryBtn'>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}

export default OrderForm;