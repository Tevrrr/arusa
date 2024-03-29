import { ImageLoaderProps } from "next/image";
import { getURL } from "./helpers/getURL";
const imageLoader = ({ src }: ImageLoaderProps): string => {
	const URL = getURL();
	return URL + src;
};
export default imageLoader;