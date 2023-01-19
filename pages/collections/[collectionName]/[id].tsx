import type { NextPage, NextPageContext } from 'next'
import MainContainer from '../../../components/MainContainer/MainContainer';

interface CollectionPageProps {
	id: string | undefined
};

const CollectionPage: NextPage<CollectionPageProps> = ({id}) => {

    return (
		<MainContainer title='Name'>
			<div className=' flex justify-center pt-14'>
				<div className=' max-w-screen-xl w-full flex justify-center'>
					<h3>{id}</h3>
				</div>
			</div>
		</MainContainer>
	);
}

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string;
	};
}

export const getServerSideProps = async ({ query }: PostNextPageContext) => {
	return {
		props: { id: query.id },
	};
};


export default CollectionPage;