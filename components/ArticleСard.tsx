import type { NextPage } from 'next'

interface ArticleCardProps {
    title: string;
    text: string;
};

const ArticleCard: NextPage<ArticleCardProps> = ({ title, text }) => {
	return (
		<div className='flex flex-col gap-3 py-6 px-3 pb-16 border-r last:border-none  border-oyster'>
			<div className='w-full bg-stormy h-96'></div>
			<div className='flex flex-col gap-6'>
				<h5>{title}</h5>
				<p className='Regular'>{text}</p>

				<p className='Small uppercase'>
					<a href=''>Read article</a>
				</p>
            </div>
            
		</div>
	);
};

export default ArticleCard;