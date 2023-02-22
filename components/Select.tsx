/** @format */

import type { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import uniqid from 'uniqid';

interface SelectProps {
	title?: string;
	options: { name: string; value: string }[] | string[];
	register?: UseFormRegisterReturn;
	value?: string;
	setValue?: (value: string) => void;
}

const Select: NextPage<SelectProps> = ({
	title,
	options,
	register,
	value = undefined,
	setValue,
}) => {
	const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		if (setValue) {
			setValue(e.target.value);
		}
	};
	return (
		<select
			onChange={onSelect}
			value={value}
			className='p-4 w-full border rounded-lg border-oyster cursor-pointer'
			{...register}>
			{title ? (
				<option value={undefined} disabled selected>
					{title}
				</option>
			) : (
				<></>
			)}

			{options.map((item) => {
				if (typeof item === 'string') {
					return (
						<option value={item} key={uniqid(item)}>
							{item}
						</option>
					);
				}
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
