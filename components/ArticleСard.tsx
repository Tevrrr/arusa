import type { NextPage } from 'next'
import Image from 'next/image';

interface ArticleCardProps {
    title: string;
    text: string;
};

const ArticleCard: NextPage<ArticleCardProps> = ({ title, text }) => {
	return (
		<div className='cursor-pointer flex flex-col gap-3 py-6 px-3 pb-16 border-r last:border-none border-oyster'>
			<div className=' relative w-full bg-stormy h-96'>
				<Image
					alt=''
					src='/formBg.png'
					fill
					className=' object-cover'
				/>
			</div>
			<div className='flex flex-col gap-6'>
				<h5>{title}</h5>
				<p className='TextRegular'>{text}</p>

				<p className='TextSmall uppercase'>
					<a href=''>Read article</a>
				</p>
			</div>
		</div>
	);
};

export default ArticleCard;