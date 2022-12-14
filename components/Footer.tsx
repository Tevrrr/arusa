import type { NextPage } from 'next'

const Footer: NextPage = () => {

    return (
		<footer className='flex flex-col text-cloudy bg-opal pb-6'>
			<div className='flex border-b border-oyster'>
				<div className='flex grow flex-col gap-4 py-6 pl-14 border-r border-oyster '>
					<p className='Small uppercase'>Store</p>
					<p className='Small'>
						<a href=''>Home</a>
					</p>
					<p className='Small'>
						<a href=''>About</a>
					</p>
					<p className='Small'>
						<a href=''>Journal</a>
					</p>
					<p className='Small'>
						<a href=''>Contact</a>
					</p>
				</div>
				<div className='flex grow flex-col gap-4 py-6 pl-14 border-r border-oyster '>
					<p className='Small uppercase'>Shop</p>
					<p className='Small'>
						<a href=''>All</a>
					</p>
					<p className='Small'>
						<a href=''>Lookbook</a>
					</p>
					<p className='Small'>
						<a href=''>Collections</a>
					</p>
					<p className='Small'>
						<a href=''>Featured</a>
					</p>
				</div>
				<div className='flex grow flex-col gap-4 py-6 pl-14 border-r border-oyster '>
					<p className='Small uppercase'>Collections</p>
					<p className='Small'>
						<a href=''>Decors</a>
					</p>
					<p className='Small'>
						<a href=''>Furnitures</a>
					</p>
					<p className='Small'>
						<a href=''>Ceramic</a>
					</p>
					<p className='Small'>
						<a href=''>Lamps</a>
					</p>
				</div>
				<div className='flex grow flex-col gap-4 py-6 pl-14 '>
					<p className='Small uppercase'>Help</p>
					<p className='Small'>
						<a href=''>Contact</a>
					</p>
					<p className='Small'>
						<a href=''>Login & Account</a>
					</p>
					<p className='Small'>
						<a href=''>Privacy Policy</a>
					</p>
					<p className='Small'>
						<a href=''>Refund Policy</a>
					</p>
				</div>
			</div>
			<div className=' flex items-center justify-center overflow-hidden'>
				<p className=' leading-[25rem] text-[30rem]'>arusa</p>
			</div>
			<p className='Small py-6 text-center uppercase border-y border-oyster'>
				© ARUSA 2022 | Agatha Sakowicz
			</p>
		</footer>
	);
}

export default Footer;