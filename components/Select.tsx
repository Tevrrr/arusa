import type { NextPage } from 'next'
import { UseFormRegisterReturn } from 'react-hook-form';
import uniqid from 'uniqid';


interface SelectProps {
	title: string;
	options: { name: string; value: string }[];
	register?: UseFormRegisterReturn;
};

const Select: NextPage<SelectProps> = ({title, options, register }) => {
    return (
		<select className='p-4 border rounded-lg border-oyster cursor-pointer' {...register}>
			<option value={undefined} disabled selected>
				{title}
			</option>
			{options.map((item) => {
				return (
					<option value={item.value} key={uniqid(item.name)}>
						{item.name}
					</option>
				);
			})}
		</select>
	);
};

export default Select;