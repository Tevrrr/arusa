/** @format */

import CardProduct from '../components/ProductCard';
import MainContainer, { textColor } from '../components/MainContainer';
import ProductCard from '../components/ProductCard';

export default function Home() {
	return (
		<MainContainer title='Home' color={textColor.light}>
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
					<div className=' max-w-[300px] min-w-[170px] grow text-opal'>
						<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					</div>
					<div className=' max-w-[300px] grow text-opal'>
						<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					</div>
					<div className=' max-w-[300px] grow text-opal'>
						<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					</div>
					<div className=' max-w-[300px] grow text-opal'>
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
			<div className='flex flex-col gap-12 bg-stormy px-24 py-[7.5rem]'>
				<div className=' flex justify-start'>
					<div className=' pb-2 bg-white p-5 w-64 text-opal'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
				</div>
				<div className=' flex justify-end'>
					<div className=' bg-white p-5 w-64 text-opal'>
						<ProductCard title='atajux lamp' price='2.399' />
					</div>
				</div>
			</div>
			<div className='flex bg-opal text-white'>
				<div className=' flex flex-row px-4 py-7 border-r'>
					<div className=' grow'></div>
					<h5 className=' writing-lr rotate-180 uppercase'>
						Lookbook
					</h5>
				</div>
				<div className='flex flex-col justify-between items-center grow border-r pt-12 pb-32 '>
					<h3 className='px-2'>Lookbook</h3>
					<p className='Regular max-w-md px-2 text-center'>
						The pieces stand out for their contemporary straight
						lines and imposing presence. Current, following the
						world trend of the great masters, the furniture stands
						out for its noble and innovative materials, composing
						sophisticated and exclusive environments.
					</p>
				</div>
				<div className='flex flex-col max-w-[39rem] w-full my-5 border-b'>
					<div className='flex justify-between uppercase py-2 px-5 border-t'>
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
			<div className='flex flex-col text-white bg-opal border-white pb-14'>
				<h4 className='text-center py-6 border-y'>
					Enjoy our feature products
				</h4>
				<div className='flex flex-wrap p-4 gap-7 justify-between'>
					<div className=' max-w-xs w-full text-white'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
					<div className=' max-w-xs w-full text-white'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
					<div className=' max-w-xs w-full text-white'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
					<div className=' max-w-xs w-full text-white'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
					<div className=' max-w-xs w-full text-white'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
					<div className=' max-w-xs w-full text-white'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
					<div className=' max-w-xs w-full text-white'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
					<div className=' max-w-xs w-full text-white'>
						<ProductCard title='iglenix vase' price='2.299' />
					</div>
				</div>
				<div className=' flex justify-center border-y py-6'>
					<button className='TeritaryBtn'>
						<p className='Small'>Shop all</p>
					</button>
				</div>
			</div>
			<div className='flex flex-col items-center gap-9 text-center pt-40 text-stormy'>
				<h2>Every detail matter</h2>
				<p className='Small uppercase'>
					
                    We are specialized in adornments, that bring charm to any environment.
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
		</MainContainer>
	);
}
