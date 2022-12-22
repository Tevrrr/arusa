/** @format */

import CardProduct from '../components/ProductCard';
import MainContainer, { textColor } from '../components/MainContainer';
import ProductCard from '../components/ProductCard';
import ArticleCard from '../components/ArticleСard';
import Image from 'next/image';
// <Image alt='' src='/indexPNG/mainBg1.png' fill/>

export default function Home() {
	return (
		<MainContainer title='Home' color={textColor.light}>
			<header className=' relative w-full h-screen text-white flex flex-col gap-10 justify-center items-center'>
				<div className='absolute w-full h-screen bg-opal -z-10'>
					<Image
						alt=''
						src='/indexPNG/Header.png'
						fill
						className=' object-cover'
					/>
				</div>
				<h1 className=' max-w-sm md:max-w-4xl text-center '>
					Seamless
					<span className=' md:italic md:font-thin'> furniture </span>
					with natural fabrics
				</h1>

				<button className='PrimaryBtn'>
					<p className='Small'>Shop all</p>
				</button>
			</header>

			<div className=' overflow-hidden relative flex flex-col gap-9 justify-center items-center pt-44 pb-52 md:pt-80 md:pb-96 py-48 px-4 text-stormy'>
				<div className=' -z-10 absolute top-10 left-8 md:top-5 md:left-auto w-36 h-28 md:w-80 md:h-64'>
					<Image
						alt=''
						src='/indexPNG/mainBg1.png'
						fill
						className=' object-cover'
					/>
				</div>
				<div className=' -z-10 absolute top-[12%] right-3  md:top-[18%] md:right-5 lg:right-[15%] w-20 h-14  md:w-44 md:h-32'>
					<Image
						alt=''
						src='/indexPNG/mainBg2.png'
						fill
						className=' object-cover'
					/>
				</div>
				<div className=' -z-10 absolute -right-14 top-1/4 lg:right-0 md:top-[40%] w-20 h-24 md:w-1/5 md:h-52'>
					<Image
						alt=''
						src='/indexPNG/mainBg3.png'
						fill
						className=' object-cover'
					/>
				</div>
				<div className=' -z-10 absolute -right-8 bottom-14 md:left-[60%] md:bottom-20 lg:bottom-36 w-40 h-32 md:w-96 md:h-72'>
					<Image
						alt=''
						src='/indexPNG/mainBg4.png'
						fill
						className=' object-cover'
					/>
				</div>
				<div className=' -z-10 absolute -left-28 bottom-28 lg:left-0 md:top-[45%] w-44 h-32 md:w-1/4 md:h-72'>
					<Image
						alt=''
						src='/indexPNG/mainBg5.png'
						fill
						className=' object-cover'
					/>
				</div>
				<div className=' -z-10 absolute -left-20 top-1/3 lg:left-[1%] md:top-[20%] w-24 h-20 md:w-1/5 md:h-48'>
					<Image
						alt=''
						src='/indexPNG/mainBg6.png'
						fill
						className=' object-cover'
					/>
				</div>
				<h2 className=' max-w-xs md:max-w-2xl text-center '>
					Creating
					<span className=' md:italic md:font-extralight'>
						{' '}
						perfect{' '}
					</span>{' '}
					<br />
					lines and imposing presence
				</h2>
				<p className='Regular max-w-lg text-center'>
					Developed the concept of exclusivity, a Arusa features
					timeless furniture, with natural fabrics, curved lines,
					plenty of mirrors and classic design, which can be
					incorporated into any decor project. The pieces enchant for
					their sobriety, to last for generations, faithful to the
					shapes of each period, with a touch of the present.
				</p>
				<button className='OutlinedBtn'>
					<p className='Small'>Read about us</p>
				</button>
			</div>

			<h4 className=' border-y-2 border-oyster py-6 text-stormy text-center'>
				Enjoy our feature products
			</h4>
			<div className=' w-full flex flex-wrap lg:gap-7 justify-between'>
				<ProductCard
					className=' lg:!border-0 lg:min-w-min lg:!max-w-[330px]'
					title='iglenix vase'
					price='2.299'
				/>
				<ProductCard
					className=' lg:!border-0 lg:min-w-min lg:!max-w-[330px]'
					title='iglenix vase'
					price='2.299'
				/>
				<ProductCard
					className=' lg:!border-0 lg:min-w-min lg:!max-w-[330px]'
					title='iglenix vase'
					price='2.299'
				/>
				<ProductCard
					className=' lg:!border-0 lg:min-w-min lg:!max-w-[330px]'
					title='iglenix vase'
					price='2.299'
				/>
			</div>

			<div className=' flex justify-center border-b lg:border-t border-oyster py-4'>
				<button className='TeritaryBtn'>
					<p className='Small text-stormy'>Shop all</p>
				</button>
			</div>
			<div className='mt-5 bg-opal flex flex-col-reverse md:flex-row text-cloudy'>
				<div className=' md:w-1/2 flex justify-center  px-4 pt-14 pb-10 md:!pt-56 md:!pb-40'>
					<div className=' max-w-[25.5rem]'>
						<h4>Native light chair</h4>
						<p className='Regular mt-12'>
							Refinement Chair with Ripped Seat, made of retro
							Eucalyptus wood, of great resistance, Kiln dried,
							made with a spike system and painted with P.U.
							(Polyurethane) With its entire structure painted in
							wood, it offers a lot of elegance to your
							environment and when cleaning is very easy, as it is
							washable and light for movement. Enough of receiving
							visitors and not having a place to accommodate them.
							With the chair, your days as a host will be marked
							by a lot of elegance and sophistication.
						</p>
						<p className='Small uppercase pt-6'>
							<a href=''>View product</a>
						</p>
					</div>
				</div>
				<div className=' relative m-4 md:m-0 h-80 md:h-auto md:w-1/2 bg-linen'>
					<Image
						alt=''
						src='/indexPNG/lightChair.png'
						fill
						className=' object-cover'
					/>
				</div>
			</div>

			<div className=' min-h-screen relative flex flex-col gap-12  px-24 py-[7.5rem]'>
				<div className=' top-0 left-0 -z-10 absolute w-full h-full'>
					<Image
						alt=''
						src='/indexPNG/cardBlockBg.png'
						fill
						className=' object-cover'
					/>
				</div>
				<div className=' hidden md:flex '>
					<ProductCard
						className=' min-w-max !max-w-[250px] bg-white !p-5 text-opal'
						title='iglenix vase'
						price='2.299'
					/>
				</div>
				<div className=' hidden md:flex '>
					<div className=' grow'></div>
					<ProductCard
						className=' min-w-max !max-w-[250px] bg-white !p-5 text-opal'
						title='iglenix vase'
						price='2.299'
					/>
				</div>
			</div>

			<div className=' overflow-hidden flex flex-col md:flex-row bg-opal text-cloudy'>
				<div className=' hidden md:flex flex-col items-center w-16 py-7 border-r'>
					<div className=' grow'></div>

					<h5 className=' writing-lr rotate-180 uppercase'>
						Lookbook
					</h5>
				</div>
				<div className='flex flex-col gap-14 justify-between items-center grow border-r p-4 md:pt-12 md:pb-32 '>
					<h3 className='px-2'>Lookbook</h3>
					<p className='Regular max-w-md px-2 text-center'>
						The pieces stand out for their contemporary straight
						lines and imposing presence. Current, following the
						world trend of the great masters, the furniture stands
						out for its noble and innovative materials, composing
						sophisticated and exclusive environments.
					</p>
				</div>
				<div className='flex flex-col-reverse md:flex-col md:max-w-[39rem] w-full md:my-5 md:border-b'>
					<div className=' hidden md:flex justify-between uppercase py-2 px-5 border-t'>
						<p className='Small'>Item</p>
						<p className='Small'>Description</p>
					</div>
					<div className='p-5 border-t'>
						<div className='p-5 pb-24 bg-[#E0E0E0] text-stormy'>
							<div className=' bg-smoke h-96'></div>
							<div className='flex justify-between uppercase py-3'>
								<p className='Small'>See lookbook</p>
								<p className='Small'>Shop all</p>
							</div>
						</div>
					</div>
					<div className='flex justify-between uppercase py-2 px-5 border-t'>
						<p className='Small'>Materials:</p>
						<p className='Small'>ceramic, glass, iron, wood</p>
					</div>
					<div className='flex justify-between uppercase py-2 px-5 border-t'>
						<p className='Small'>Produced in:</p>
						<p className='Small'>Canada, Italy, United States</p>
					</div>
					<div className='flex justify-between uppercase py-2 px-5 border-t'>
						<p className='Small'>Categories:</p>
						<p className='Small'>Decoration, lamp, furnityre</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col text-cloudy bg-opal border-white pb-14'>
				<h4 className='text-center py-6 border-y'>
					Enjoy our feature products
				</h4>
				<div className=' flex gap-0 justify-center'>
					<div className=' max-w-screen-xl w-full flex flex-wrap lg:p-4 gap-[1px] lg:gap-7 justify-between'>
						<ProductCard
							className=' lg:!border-0 lg:min-w-min lg:!max-w-[330px] '
							title='iglenix vase'
							price='2.299'
						/>
						<ProductCard
							className=' lg:!border-0 lg:min-w-min lg:!max-w-[330px] '
							title='iglenix vase'
							price='2.299'
						/>
						<ProductCard
							className=' lg:!border-0 lg:min-w-min lg:!max-w-[330px] '
							title='iglenix vase'
							price='2.299'
						/>
						<ProductCard
							className=' lg:!border-0 lg:min-w-min lg:!max-w-[330px] '
							title='iglenix vase'
							price='2.299'
						/>
					</div>
				</div>

				<div className=' flex justify-center border-b lg:border-t py-6'>
					<button className='TeritaryBtn'>
						<p className='Small'>Shop all</p>
					</button>
				</div>
			</div>

			<div className='flex flex-col items-center gap-9 text-center pt-40 text-stormy md:border-oyster md:border-l pb-20 md:ml-16'>
				<h2>Every detail matter</h2>
				<p className='Small uppercase'>
					We are specialized in adornments, that bring charm to any
					environment.
				</p>
				<p className='Regular max-w-lg px-2'>
					There are multiples of high quality pieces, with styles that
					transition from classic to contemporary. An exclusive
					selection of lampshades, vases, murals, pillows, paintings
					and many gifts to compose great projects. In order
					selection, a mix of basic style, stricter customization and
					more compact dimensions, composing sophisticated and
					exclusive environments.
				</p>
			</div>
			<div className='flex flex-col md:flex-row text-stormy border-t border-oyster'>
				<div className=' hidden md:flex flex-col items-center w-16 box-content py-7 border-r border-oyster'>
					<div className=' grow'></div>

					<h5 className=' writing-lr rotate-180 uppercase'>
						Details
					</h5>
				</div>
				<div className=' md:px-4 md:py-3 border-r border-oyster grow'>
					<div className=' relative h-64 md:h-[42rem] '>
						<Image
							alt=''
							src='/indexPNG/detailsMain.png'
							fill
							className=' object-cover'
						/>
					</div>
				</div>
				<div className='w-full md:max-w-sm flex md:flex-col gap-2 justify-between p-2 md:px-4 md:py-3'>
					<div className=' relative h-52 md:h-64 grow '>
						<Image
							alt=''
							src='/indexPNG/details1.png'
							fill
							className=' object-cover'
						/>
					</div>
					<div className=' relative h-52 md:h-96 grow  '>
						<Image
							alt=''
							src='/indexPNG/details2.png'
							fill
							className=' object-cover'
						/>
					</div>
				</div>
			</div>

			<div className=' relative flex justify-center items-center h-[41.5rem] '>
				<div className=' absolute -z-10 w-full h-full'>
					<Image
						alt=''
						src='/indexPNG/afterDetailsBg.png'
						fill
						className=' object-cover'
					/>
				</div>

				<div className=' hidden md:block relative h-[31rem] w-96 '>
					<Image
						alt=''
						src='/indexPNG/afterDetailsContent.png'
						fill
						className=' object-cover'
					/>
				</div>
			</div>

			<h4 className='text-center py-6 border-y border-oyster'>
				Enjoy our articles
			</h4>
			<div className=' flex '>
				<div className=' hidden md:flex flex-col items-center box-content px-5 py-7 border-r border-oyster'>
					<div className=' grow'></div>

					<h5 className=' writing-lr rotate-180 uppercase'>
						Reader stories
					</h5>
				</div>
				<div className='flex flex-col md:flex-row grow justify-between gap-8 p-8 pb-7 pr-2'>
					<div className=' flex flex-col gap-14 md:w-1/2 '>
						<h3>Manhattan Pià-terre for a new Chicago apartment</h3>
						<p className='Regular'>
							Interior designer Sarah Vaile remembers eyeing a New
							York City apartment—one with bold colors and a
							personality as distinct as its chic owner—in a 2014
							issue of House Beautiful, and tucking it away for
							future design inspiration. Years later, in a
							serendipitous turn of events, the woman she&apos;d
							seen in the magazine—a stylish figure now in her
							30s—just moved to Chicago.
						</p>
						<p className='Small uppercase'>
							<a href=''>Read article</a>
						</p>
					</div>
					<div className=' md:w-1/2'>
						<div className='h-[35rem] bg-stormy'></div>
					</div>
				</div>
			</div>
			<div className=' flex justify-center border-y border-oyster py-6'>
				<button className='TeritaryBtn'>
					<p className='Small'>See all articles</p>
				</button>
			</div>
			<div className='flex flex-col md:flex-row border-b border-oyster'>
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
		</MainContainer>
	);
}
