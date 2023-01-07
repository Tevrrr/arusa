import type { NextPage } from 'next'
import { ReactNode } from 'react';

interface SideHeaderProps {
    className?: string;
	children: ReactNode;
};

const SideHeader: NextPage<SideHeaderProps> = ({ className='', children }) => {
	return (
		<div
			className={` hidden lg:flex flex-col items-center w-16 pl-3 pr-8 py-7 border-r border-oyster ${className}`}>
			<div className=' grow'></div>

			<h5 className=' writing-lr rotate-180 uppercase'>{children}</h5>
		</div>
	);
};

export default SideHeader;