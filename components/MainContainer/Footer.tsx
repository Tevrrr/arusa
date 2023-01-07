import type { NextPage } from 'next'

const Footer: NextPage = () => {

    return (
		<footer className='flex flex-col text-cloudy bg-opal pt-16 md:pt-0 pb-6'>
			<div className='flex flex-wrap border-y border-oyster'>
				<div className=' w-1/2 md:w-auto flex grow flex-col gap-4 p-4 md:py-6 md:pl-14 border-r border-oyster '>
					<p className='TextSmall uppercase'>Store</p>
					<p className='TextSmall'>
						<a href=''>Home</a>
					</p>
					<p className='TextSmall'>
						<a href=''>About</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Journal</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Contact</a>
					</p>
				</div>
				<div className=' w-1/2 md:w-auto flex grow flex-col gap-4 p-4 md:py-6 md:pl-14 md:border-r border-oyster '>
					<p className='TextSmall uppercase'>Shop</p>
					<p className='TextSmall'>
						<a href=''>All</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Lookbook</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Collections</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Featured</a>
					</p>
				</div>
				<div className=' w-1/2 md:w-auto flex grow flex-col gap-4 p-4 md:py-6 md:pl-14 border-t md:border-t-0 border-r border-oyster '>
					<p className='TextSmall uppercase'>Collections</p>
					<p className='TextSmall'>
						<a href=''>Decors</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Furnitures</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Ceramic</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Lamps</a>
					</p>
				</div>
				<div className=' w-1/2 md:w-auto flex grow flex-col gap-4 p-4 md:py-6 md:pl-14 border-t md:border-t-0 '>
					<p className='TextSmall uppercase'>Help</p>
					<p className='TextSmall'>
						<a href=''>Contact</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Login & Account</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Privacy Policy</a>
					</p>
					<p className='TextSmall'>
						<a href=''>Refund Policy</a>
					</p>
				</div>
			</div>
			<div className=' flex items-center justify-center overflow-hidden'>
				<p className=' md:leading-[25rem] text-9xl md:text-[30rem]'>
					arusa
				</p>
			</div>
			<p className='TextSmall py-6 text-center uppercase border-y border-oyster'>
				© ARUSA 2022 | Agatha Sakowicz
			</p>
		</footer>
	);
}

export default Footer;