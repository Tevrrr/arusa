import type { NextPage } from 'next'
import MainContainer, { textColor } from '../../components/MainContainer/MainContainer';
import Image from 'next/image';
import SideHeader from '../../components/SideHeader';

const About: NextPage = () => {

    return (
		<MainContainer color={textColor.light} title='About'>
			<header className=' relative w-full h-screen text-white flex flex-col gap-10 justify-center items-center'>
				<div className='absolute w-full h-screen bg-opal -z-10'>
					<Image
						alt=''
						src='/aboutPNG/Header.jpg'
						fill
						className=' object-cover'
					/>
				</div>
				<h1 className=' max-w-sm md:max-w-4xl text-center '>
					We
					<span className=' italic'> belive in </span>
					sustainable decor
				</h1>
			</header>
			<div className='flex justify-center bg-opal'>
				<div className=' md:min-h-screen max-w-screen-xl w-full flex text-oyster '>
					
                    <SideHeader>About us</SideHeader>
					<div className=' grow px-4 py-8 md:pl-28 flex items-center'>
						<div className=' max-w-5xl flex flex-col gap-2 TextRegular'>
							<h4>Created based on the concept of exclusivity</h4>
							<p className=' uppercase py-7'>
								Seasonless style to have and to hold on to: the
								nine-word sol&apos;eace manifesto.
							</p>
							<p>
								Arusa features timeless furniture, with natural
								fabrics, curved lines, plenty of mirrors and
								olassic design, which can be incorporated into
								any decor project. The pleces enchant for their
								sobriety, to last for generations, faithful to
								the shapes of each period, with a touch of the
								present.
							</p>
							<p>
								he pieces stand out for their contemporary
								straight lines and imposing presence. Current.
								following the world trend of the great masters,
								the furniture stands out for its noble and
								innovative materials, composing sophisticated
								and exclusive environments.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className=' max-w-screen-xl w-full h-screen flex flex-col md:flex-row'>
					<div className='md:w-1/2 h-full p-5 md:border-r border-oyster'>
						<div className=' w-full h-full relative'>
							<Image
								alt=''
								src='/aboutPNG/hangingLamp.png'
								fill
								className=' object-cover'
							/>
						</div>
					</div>
					<div className=' grow flex justify-center items-center'>
						<div className=' max-w-md flex flex-col gap-6 TextRegular'>
							<h4>About our legacy</h4>
							<p>
								Elegant and welcoming, it has a selected mix of
								products, carefully thought out to optimize the
								moment of project specification, regardless of
								their dimensions or styles. Our gateway to the
								Sal&apos;ace universe is a great opportunity to
								acquire contemporary pieces, with world-wide
								quality and design.
							</p>
							<p>
								Conceived with the objective of displaying the
								most diverse concepts of life style, when it
								comes to bedrooms, the store features exclusive
								furniture for the most intimate areas of the
								house, such as beads, mattresses and
								nightstands, as wall as aspecial selection of
								wallpapers , fabrics and trousseaus. With a mix
								of possibilities and high customization, the
								furniture meets any expectations, Composing cozy
								and charming rooms.
							</p>
							<p className='TextSmall uppercase pb-8'>
								View product
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className=' relative flex justify-center items-center h-[41.5rem] '>
				<div className=' absolute -z-10 w-full h-full'>
					<Image
						alt=''
						src='/aboutPNG/clothBg.jpg'
						fill
						className=' object-cover'
					/>
				</div>

				<div className=' relative h-80 w-60 md:h-[31rem] md:w-96 '>
					<Image
						alt=''
						src='/aboutPNG/Screenshot_3.png'
						fill
						className=' object-cover'
					/>
				</div>
			</div>
			<div className='flex justify-center bg-opal'>
				<div className=' min-h-screen max-w-screen-xl w-full flex text-oyster '>
					
                    <SideHeader>Sections</SideHeader>
					<div className=' grow lg:pl-28 flex flex-col justify-between py-10 px-4 lg:px-0 '>
						<h3 className=' pb-12 md:pb-0'>
							Furniture that offer <br />
							smart solutions
						</h3>
						<div className=' w-full max-w-4xl flex flex-col gap-8'>
							<div className=' flex flex-col md:flex-row gap-4 pt-5 border-t border-oyster '>
								<div className='flex grow items-start gap-5'>
									<p className='TextRegular'>01.</p>
									<h4>Objects</h4>
								</div>
								<p className='TextSmall w-full max-w-md pl-10 md:pl-0'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat.
								</p>
							</div>
							<div className=' flex flex-col md:flex-row gap-4 pt-5 border-t border-oyster '>
								<div className='flex grow items-start gap-5'>
									<p className='TextRegular'>02.</p>
									<h4>Contemporary</h4>
								</div>
								<p className='TextSmall w-full max-w-md pl-10 md:pl-0'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate.
								</p>
							</div>
							<div className=' flex flex-col md:flex-row gap-4 pt-5 border-t border-oyster '>
								<div className='flex grow items-start gap-5'>
									<p className='TextRegular'>03.</p>
									<h4>Bedroom</h4>
								</div>
								<p className='TextSmall w-full max-w-md pl-10 md:pl-0'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco.
								</p>
							</div>
							<div className=' flex flex-col md:flex-row gap-4 pt-5 border-t border-oyster '>
								<div className='flex grow items-start gap-5'>
									<p className='TextRegular'>04.</p>
									<h4>Industry</h4>
								</div>
								<p className='TextSmall w-full max-w-md pl-10 md:pl-0'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=' flex justify-center border-oyster border-b lg:border-t'>
				<div className=' w-full max-w-screen-xl md:ml-32 md:border-l border-oyster py-6'>
					<p className='TextRegular text-center uppercase'>
						Ideas from scratch
					</p>
				</div>
			</div>
			<div className='flex justify-center border-b border-oyster'>
				<div className=' max-w-screen-xl w-full flex'>
					
                    <SideHeader>Insights</SideHeader>
					<div className=' grow flex flex-col lg:flex-row justify-between '>
						<div className=' shrink-0 relative lg:w-[45%] min-h-[420px] lg:min-h-[670px]'>
							<Image
								alt=''
								src='/aboutPNG/Workers.jpg'
								fill
								className=' object-cover'
							/>
						</div>
						<div className='flex flex-col justify-between gap-4 grow py-12 px-4 '>
							<h3 className='md:pl-10 grow'>
								Some notes from <br /> the creator
							</h3>
							<div className='flex flex-col md:flex-row md:border-t border-oyster'>
								<p className='TextSmall uppercase md:px-8 py-4 md:border-r border-oyster'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<div className='flex flex-col gap-8 md:px-10 py-4'>
									<p className='TextRegular'>
										Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis
										aute irure dolor in reprehenderit in
										voluptate velit esse cillum dolore eu
										fugiat nulla pariatur.{' '}
									</p>
									<div className=' w-44 h-12 bg-opal'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}

export default About;