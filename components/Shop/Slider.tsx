/** @format */

import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface SliderProps {
	images: string[];
}

const Slider: NextPage<SliderProps> = ({ images }) => {
	const [activeSlide, setactiveSlide] = useState(0);
	const clickOnSlide = (value: number): (() => void) => {
		return () => {
			setactiveSlide(value);
		};
	};
    const clickOnArrow = (valueShift: number): (() => void) => {
		return () => {
			setactiveSlide(activeSlide+valueShift);
		};
	};
	return (
		<div className=' w-full h-full relative pb-7 md:p-0 max-w-xl lg:max-w-none flex md:bg-cloudy'>
			<div className=' block md:hidden absolute w-full h-full'>
				<button
					className='  md:hidden block absolute left-0 top-1/2 z-10 disabled:hidden p-0 text-3xl'
					disabled={0 === activeSlide}
					onClick={clickOnArrow(-1)}>
					<AiOutlineLeft />
				</button>
				<button
					className='  md:hidden block absolute right-0 top-1/2 z-10 disabled:hidden p-0 text-3xl'
					disabled={images.length - 1 === activeSlide}
					onClick={clickOnArrow(1)}>
					<AiOutlineRight />
				</button>
				<div className=' absolute w-full bottom-0 z-10 flex md:hidden justify-between'>
					<p className='TextLarge uppercase'>Swipe</p>
					<p className='TextLarge uppercase'>
						{activeSlide + 1}/{images.length}
					</p>
				</div>
			</div>
			<div className=' m-4 w-20 hidden md:flex flex-col gap-2'>
				{images.map((item, i) => {
					return (
						<div
							key={i + item}
							className={`relative w-full h-20 border border-oyster rounded-xl overflow-hidden cursor-pointer 
                                        transition-all duration-75 hover:opacity-100 ${
											item === images[activeSlide] ||
											' opacity-70'
										}`}
							onClick={clickOnSlide(i)}>
							<Image
								alt=''
								src={item}
								fill
								className=' object-cover'
							/>
						</div>
					);
				})}
			</div>
			<div className=' grow relative'>
				<Image
					alt=''
					src={images[activeSlide]}
					fill
					className=' object-cover'
				/>
			</div>
		</div>
	);
};

export default Slider;
