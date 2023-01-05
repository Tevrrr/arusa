import type { NextPage } from 'next'

interface BagProps {};

const Bag: NextPage<BagProps> = () => {

    return (
		<div className=' w-full h-full flex flex-col '>
			<div className=' grow'>
				<h5 className=' hidden md:block uppercase'>Order summary</h5>
				<p className=' md:hidden TextRegular uppercase'>Order summary</p>
			</div>
			<div className='flex justify-between items-center border-y border-oyster py-3'>
				<p className='TextRegular uppercase'>Grand tota incl. tax</p>
				<p className='Caption font-bold'>$4,990.00</p>
			</div>
			<div className=' flex flex-col-reverse md:flex-row gap-2 py-4 '>
				<button className='OutlinedBtn md:grow uppercase'>
					Continue shopping
				</button>
				<button className='SecondaryBtn md:grow uppercase'>
					Proceed sheckout
				</button>
			</div>
		</div>
	);
}

export default Bag;