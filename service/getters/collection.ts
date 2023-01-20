/** @format */

import { ICollection } from "../../common/types/collection";
import { collectionsJSON } from "../data/collections";

export const getCollections = async (
	filter: string,
	props?: (value: ICollection[]) => void
): Promise<ICollection[]> => {
	const collections: ICollection[] = await JSON.parse(collectionsJSON);

	const filteredCollections: ICollection[] = collections.filter((item) => {
		return filter === item.filter;
	});

	if (props) props(filteredCollections);
	return filteredCollections;
};
