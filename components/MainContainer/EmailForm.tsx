import type { NextPage } from 'next'
import Image from 'next/image';
import Input from '../Input';

const EmailForm: NextPage = () => {

    return (
		<div className='flex justify-center'>
			<div className=' w-full max-w-screen-xl md:px-14 md:py-20'>
				<div className='relative flex flex-col justify-center items-center text-center gap-12 w-full h-[42rem] text-cloudy'>
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
					<Input placeholder='YOUR EMAIL' />
					
				</div>
			</div>
		</div>
	);
}

export default EmailForm;