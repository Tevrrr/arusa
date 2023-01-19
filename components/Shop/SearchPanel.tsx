/** @format */

import type { NextPage } from 'next';
import { FormEvent, FormEventHandler, useContext, useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { ProductContext } from '../../common/ProductProvider';

const SearchPanel: NextPage = () => {
	const { searchQuery, setSearchQuery, productQuantity } =
		useContext(ProductContext);
	const [queryValue, setQueryValue] = useState(searchQuery);

	useEffect(() => {
		if (!queryValue && searchQuery !== queryValue) {
			setSearchQuery('');
		}
    }, [queryValue]);

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchQuery(queryValue);
	};
    

	return (
		<div className=' max-w-screen-xl w-full flex justify-between md:pl-44 lg:pl-72'>
			<p className='TextRegular flex items-center w-1/2 md:w-auto pt-10 p-3 uppercase border-r md:border-0 border-oyster'>
				{productQuantity} products
			</p>
			<form
				onSubmit={formHandler}
				className='TextRegular w-1/2 md:w-auto flex items-center gap-2 pt-10 p-3'>
				<input
					className=' grow md:grow-0 w-28 md:w-40 p-1'
					type='text'
					value={queryValue}
					onChange={(e) => {
						setQueryValue(e.target.value);
					}}
					placeholder='SEARCH'
				/>
				<AiOutlineSearch
					className=' text-xl cursor-pointer'
					onClick={() => setSearchQuery(queryValue)}
				/>

				<AiOutlineClose
					className=' text-xl cursor-pointer'
					onClick={() => setQueryValue('')}
				/>
			</form>
		</div>
	);
};

export default SearchPanel;
