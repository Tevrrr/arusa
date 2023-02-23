import type { NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import { UrlObject } from 'url';
interface CollectionCardProps {
	href: string | UrlObject;
	title: string;
	image?: string;
};

const CollectionCard: NextPage<CollectionCardProps> = ({
	href,
	title,
	image,
}) => {
	return (
		<div className=' box-border w-full md:w-[50%] md:last:max-w-[50%] grow flex justify-center items-center h-72 p-4 '>
			<Link
				href={href}
				className=' group w-full h-full flex items-center justify-center border border-oyster bg-stormy bg-opacity-80 rounded-lg overflow-hidden relative '>
				<h4 className=' text-oyster'>{title}</h4>
                {!image || <Image
					alt=''
					src={image}
					fill
					className=' object-cover -z-10 group-hover:scale-110 transition-transform duration-700'
				/>}
			</Link>
		</div>
	);
};

export default CollectionCard;