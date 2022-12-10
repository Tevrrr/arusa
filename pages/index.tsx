/** @format */

import CardProduct from '../components/CardProduct';
import MainContainer from '../components/MainContainer';

export default function Home() {
	return (
		<MainContainer title='Home'>
			<header className=' w-full h-screen bg-opal text-white flex flex-col gap-10 justify-center items-center'>
				<h1 className=' max-w-4xl text-center '>
					Seamless
					<span className=' italic font-extralight'> furniture </span>
					with natural fabrics
				</h1>
				<button className='PrimaryBtn uppercase'>
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
				<button className='OutlinedBtn uppercase'>
					<p className='Small'>Read about us</p>
				</button>
			</div>
			<h4 className=' border-y-2 border-oyster py-6 text-stormy text-center'>
				Enjoy our feature products
			</h4>
			<div className='flex justify-center py-6'>
				<div className=' flex flex-wrap justify-center gap-8 max-w-[1440px] w-full'>
					<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
					<CardProduct title='NATIVE IRON CHAIR' price='4,990' />
				</div>
			</div>
		</MainContainer>
	);
}
