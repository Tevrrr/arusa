import type { NextPage, NextPageContext } from 'next'
import { ICollection } from '../../../common/types/collection';
import { IProduct, IProductPage } from '../../../common/types/product';
import { getProductPage } from '../../../service';
import { getFilters } from '../../../service/getters/filter';
import { getCollectionByID } from '../../../service/getters/collection';
import { getProductsByIDs } from '../../../service/getters/product';
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';

interface CollectionPageProps {
	collection: ICollection;
	products: IProduct[];
};

const CollectionPage: NextPage<CollectionPageProps> = ({
	collection,
	products,
}) => {
    console.log(collection, products);
    return (
		<MainAdminContainer title='colection'>
			<h2 className=' mt-20'>{collection.name}</h2>
		</MainAdminContainer>
	);
};

export default CollectionPage;

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string;
	};
}

export const getServerSideProps = async ({
	query,
}: PostNextPageContext) => {
	const collection = await getCollectionByID(query.id);
	const products = await getProductsByIDs(collection?.products||[]);
	return {
		props: { collection, products },
	};
};