import type { NextPage } from 'next'
import { UseFormRegisterReturn } from 'react-hook-form';
import uniqid from 'uniqid';


interface TextareaProps {
	className?: string;
	placeholder?: string;
	register?: UseFormRegisterReturn;
};

const Textarea: NextPage<TextareaProps> = ({
	className,
	placeholder,
	register,
}) => {
	return (
		<textarea
			placeholder={placeholder}
			className={`p-4 border rounded-lg border-oyster ${className}`}
			{...register}/>
	);
};

export default Textarea;