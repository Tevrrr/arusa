/** @format */

import { IBagItem } from "../../common/types/BagContext";
import { IClientData } from "../../common/types/clientData";

export const submitForm = (products: IBagItem[], clientData: IClientData) => {
	const result = { clientData, products };
	console.log(result);
};
