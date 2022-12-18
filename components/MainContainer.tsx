/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Image from 'next/image';

export enum textColor {
	'light' = 'text-white',
	'dark' = 'text-opal',
}

interface MainContainerProps {
	title: string;
    children: ReactNode;
    color?: textColor;
    emailForm?: boolean;
    
}

const MainContainer: NextPage<MainContainerProps> = ({
	children,
	title,
	color = textColor.dark,
	emailForm = true,
}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<div className='text-white text-opal' />
			<div className={color}>
				<Navbar />
			</div>
			<div className=' text-stormy'>{children}</div>
			{!emailForm || (
				<div className=' px-14 py-20'>
					<div className='relative flex flex-col justify-center items-center text-center gap-12 w-full h-[42rem] text-cloudy'>
                        <div className=' absolute w-full h-full -z-10'>
                           <Image
							alt=''
							src='/../public/formBg.png'
							fill
						/> 
                        </div>
                        

						<h2 className=' max-w-2xl'>
							Be part of our club for discount
						</h2>
						<p>
							<input
								type='text'
								placeholder='YOUR EMAIL'
								className=' w-80 p-4 bg-[#0000] border rounded-lg border-oyster text-cloudy '
							/>
						</p>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default MainContainer;
