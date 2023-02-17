/** @format */

import { FILTERS } from './consts';
import { ICollection } from './../types/collection';
import { COLLECTION_NAMES } from './consts';
import { getRandomInt } from './getRandomInt';

// export const collectionGenerator = (amount: number): ICollection[] => {
// 	let collections: ICollection[] = [];
// 	for (let i = 0; i < amount; i++) {
// 		let filter = FILTERS[getRandomInt(FILTERS.length)];
// 		let nextItem: ICollection = {
// 			filter,
// 			name: `${filter} ${COLLECTION_NAMES[getRandomInt(COLLECTION_NAMES.length)]}`,
// 			image: filter + '.png',
// 		};
// 		collections.push(nextItem);
// 	}
// 	return collections;
// };
