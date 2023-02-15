/** @format */

import type { NextPage } from 'next';
import uniqid from 'uniqid';

interface PageNavProps {
	count: number;
	setPage: (value: number) => void;
	activePage: number;
}

const PageNav: NextPage<PageNavProps> = ({ count, setPage, activePage }) => {
	const generatePageArray = () => {
		let result: number[] = [];
		for (let i = 0; i < count; i++) {
			result.push(i + 1);
		}
		console.log(result);
		return result;
	};
	const togglePage = (value: number): (() => void) => {
		return () => {
			setPage(value);
		};
	};
	return (
		<div className='flex gap-2 items-baseline'>
			{count <= 10
				? generatePageArray().map((item) => {
						return (
							<p
								className={`TextLarge cursor-pointer p-2 border rounded border-[#0000] ${
									activePage !== item || ' !border-oyster '
								}`}
								onClick={togglePage(item)}
								key={uniqid(item.toString())}>
								{item}
							</p>
						);
				  })
				: generatePageArray().map((item) => {
						if (
							item < 3 ||
							item > count - 2 ||
							item > activePage - 3 &&
							item < activePage + 3
						) {
							return (
								<p
									className={`TextLarge cursor-pointer p-2 border rounded border-[#0000] ${
										activePage !== item ||
										' !border-oyster '
									}`}
									onClick={togglePage(item)}
									key={uniqid(item.toString())}>
									{item}
								</p>
							);
						}
						if (item === 3 || item === count - 3) {
							return <p key={uniqid()}>...</p>;
						}
				  })}
			
		</div>
	);
};

export default PageNav;
