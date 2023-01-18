/** @format */

import type { NextPage } from 'next';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps
	 {
	className?: string;
	placeholder?: string;
	register?: UseFormRegisterReturn;
}

const Input: NextPage<InputProps> = ({className, placeholder, register}) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			className={` w-80 p-4 bg-[#0000] border rounded-lg border-oyster text-cloudy ${className}`}
			{...register}
		/>
	);
};

export default Input;
