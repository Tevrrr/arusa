/** @format */

import type { NextPage } from 'next';
import MainContainer from '../../components/MainContainer/MainContainer';
import Image from 'next/image';
import SideHeader from '../../components/SideHeader';

const Contact: NextPage = () => {
	return (
		<MainContainer title='Contact' emailForm={false}>
			<div className='mx-auto pt-14 w-full max-w-screen-xl flex flex-col md:flex-row '>
				<SideHeader className=' border-none'>Contact</SideHeader>
				<div className=' relative w-full h-96 md:h-[95vh] md:w-1/2 xl:ml-4'>
					<Image
						alt=''
						src='/contactPNG/Header.png'
						fill
						className=' object-cover'
					/>
				</div>
				<div className='grow'></div>
				<div className='flex flex-col justify-center items-center gap-8 px-4 py-14 text-center md:w-1/2'>
					<h4 className=' block md:hidden'>Get in touch</h4>
					<h2 className=' hidden  md:block'>Get in touch</h2>
					<div className=' max-w-sm flex flex-col justify-center gap-8'>
						<p className='TextRegular'>
							Our Arusa customer service is always prepared to
							support you. How can we help you today?
						</p>
						<div className='flex justify-between'>
							<p className='TextSmall'>Support</p>
							<p className='TextSmall'>support@arusa.com</p>
						</div>
						<div className='flex justify-between'>
							<p className='TextSmall'>Partnership</p>
							<p className='TextSmall'>parters@arusa.com</p>
						</div>
						<div className='flex justify-between'>
							<p className='TextSmall'>Return & Issues</p>
							<p className='TextSmall'>returns@arusa.com</p>
						</div>
						<div className='flex justify-between'>
							<p className='TextSmall'>Careers</p>
							<p className='TextSmall'>careers@arusa.com</p>
						</div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default Contact;
