import type { NextPage } from 'next'
import Image from 'next/image';

const EmailForm: NextPage = () => {

    return (
		<div className=' md:px-14 md:py-20'>
			<div className='relative flex flex-col justify-center items-center text-center gap-12 w-full h-[42rem] text-cloudy'>
				<div className=' absolute w-full h-full -z-10'>
					<Image alt='' src='/formBg.png' fill className=' object-cover' />
				</div>

				<h2 className=' max-w-2xl'>Be part of our club for discount</h2>
				<p>
					<input
						type='text'
						placeholder='YOUR EMAIL'
						className=' w-80 p-4 bg-[#0000] border rounded-lg border-oyster text-cloudy '
					/>
				</p>
			</div>
		</div>
	);
}

export default EmailForm;