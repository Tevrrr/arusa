import type { NextPage } from 'next'

interface InputProps {
	className?: string;
	placeholder?: string;

};

const Input: NextPage<InputProps> = ({
	className = '',
	placeholder = '',

}) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			className={` w-80 p-4 bg-[#0000] border rounded-lg border-oyster text-cloudy ${className}`}
		/>
	);
};

export default Input;