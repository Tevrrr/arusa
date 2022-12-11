/** @format */

import CardProduct from '../components/ProductCard';
import MainContainer from '../components/MainContainer';
import ProductCard from '../components/ProductCard';

export default function Home() {
	return (
		<MainContainer title='Home'>
			<header className=' w-full h-screen bg-opal text-white flex flex-col gap-10 justify-center items-center'>
				<h1 className='hidden md:block max-w-4xl text-center '>
					Seamless
					<span className=' italic font-thin'> furniture </span>
					with natural fabrics
				</h1>
				<h4 className=' font-normal md:hidden max-w-xs text-center '>
					Seamless furniture with natural fabrics
				</h4>
				<button className='PrimaryBtn'>
					<p className='Small'>Shop all</p>
				</button>
			</header>
			<div className='flex flex-col gap-10 justify-center items-center py-48 px-4 text-stormy'>
				<h2 className=' max-w-2xl text-center '>
					Creating
					<span className=' italic font-extralight'>
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
			<div className='flex justify-center py-6 px-2'>
				<div className=' flex flex-wrap justify-center gap-8 max-w-screen-xl w-full'>
					<div className=' max-w-[300px] min-w-[170px] grow'>
						<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					</div>
					<div className=' max-w-[300px] grow'>
						<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					</div>
					<div className=' max-w-[300px] grow'>
						<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					</div>
					<div className=' max-w-[300px] grow'>
						<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					</div>
				</div>
			</div>
			<div className=' flex justify-center border-y-2 border-oyster py-4'>
				<button className='TeritaryBtn'>
					<p className='Small text-stormy'>Shop all</p>
				</button>
			</div>
			<div className='mt-5 bg-opal flex text-white'>
				<div className=' w-1/2 flex justify-center pt-56 pb-40'>
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
				<div className=' w-1/2 bg-linen'></div>
			</div>
			<div className='flex flex-col gap-14 bg-stormy px-24 py-32'>
				<div className=' flex justify-start'>
					<div className=' bg-white p-5 w-64'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
				</div>
				<div className=' flex justify-end'>
					<div className=' bg-white p-5 w-64'>
						<ProductCard title='atajux lamp' price='2.399' />
					</div>
				</div>
			</div>
		</MainContainer>
	);
}
