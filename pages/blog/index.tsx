/** @format */

import type { NextPage } from 'next';
import MainContainer from '../../components/MainContainer/MainContainer';
import Image from 'next/image';
import ArticleCard from '../../components/ArticleСard';
import SideHeader from '../../components/SideHeader';

const Blog: NextPage = () => {
	return (
		<MainContainer title='Blog'>
			<div className='flex justify-center pt-14'>
				<div className='w-full max-w-screen-xl flex flex-col md:flex-row lg:pr-36 '>
					<SideHeader className=' border-none'>Blog</SideHeader>
					<div className=' relative w-full h-96 md:h-[650px] md:max-w-lg xl:ml-4'>
						<Image
							alt=''
							src='/blogPNG/Header.png'
							fill
							className=' object-cover'
						/>
					</div>
					<div className='grow'></div>
					<div className='flex flex-col justify-between items-center gap-8 px-4 py-14 text-center md:w-1/2 xl:border-x border-oyster'>
						<h4 className=' block md:hidden'>Our blog</h4>
						<h3 className='hidden  md:block'>Our blog</h3>
						<div className=' max-w-md flex flex-col justify-center items-center gap-8'>
							<p className='TextSmall'>
								Exclusivity permeates the entire Solace
								universe. Our timeless, unleashed proposals
								celebrate various styles, prioritize comfort,
								signed design and stand out as a reference in
								the architecture and decoration segment
							</p>
							<p className='TextRegular'>
								Contemporaneity, innovation in the workspace,
								classic reinterpretations, lifestyle for
								intimate environments and generous hints of
								Brazilianness in the choice of objects you
								inherited in our showrooms.
							</p>
							<button className='TeritaryBtn uppercase'>
								{' '}
								See all articles
							</button>
						</div>
					</div>
				</div>
			</div>

			<h4 className=' hidden md:block text-center py-6 border-y border-oyster'>
				Featured article
			</h4>
			<div className='hidden md:flex justify-center'>
				<div className=' max-w-screen-xl flex '>
					<SideHeader>Reader stories</SideHeader>
					<div className='flex flex-col md:flex-row grow justify-between gap-8 p-8 pb-7 pr-2'>
						<div className=' flex flex-col gap-14 md:w-1/2 '>
							<h3>
								Manhattan Pià-terre for a new Chicago apartment
							</h3>
							<p className='TextRegular'>
								Interior designer Sarah Vaile remembers eyeing a
								New York City apartment—one with bold colors and
								a personality as distinct as its chic owner—in a
								2014 issue of House Beautiful, and tucking it
								away for future design inspiration. Years later,
								in a serendipitous turn of events, the woman
								she&apos;d seen in the magazine—a stylish figure
								now in her 30s—just moved to Chicago.
							</p>
							<p className='TextSmall uppercase'>
								<a href=''>Read article</a>
							</p>
						</div>
						<div className=' md:w-1/2'>
							<div className='h-[35rem] bg-stormy'></div>
						</div>
					</div>
				</div>
			</div>

			<div className='hidden md:flex justify-center gap-20 py-8 border-y border-oyster'>
				<p className='TextRegular uppercase'>All</p>
				<p className='TextRegular uppercase'>Featured</p>
				<p className='TextRegular uppercase'>Insparation</p>
			</div>

			<div className='flex justify-center'>
				<div className='w-full max-w-screen-xl flex flex-col '>
					<div className='flex md:hidden border-y border-oyster '>
						<div className='flex justify-center items-center w-1/2 uppercase py-6 cursor-pointer border-r border-oyster'>
							{' '}
							Featured article
						</div>
						<div className='flex justify-center items-center w-1/2 uppercase py-6 cursor-pointer'>
							{' '}
							Blog
						</div>
					</div>
					<div className='flex justify-center'>
						<div className=' max-w-screen-xl flex flex-col md:flex-row border-b border-oyster'>
							<ArticleCard
								title="Inside a playful, bohemian beach house on Martha's Vineyard"
								text="I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha's Vineyard."
							/>

							<ArticleCard
								title="Inside a playful, bohemian beach house on Martha's Vineyard"
								text="I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha's Vineyard."
							/>

							<ArticleCard
								title="Inside a playful, bohemian beach house on Martha's Vineyard"
								text="I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha's Vineyard."
							/>
						</div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default Blog;
