import type { NextPage } from 'next'
import MainContainer from '../components/MainContainer/MainContainer';
import { GiSadCrab } from 'react-icons/gi';
import Link from 'next/link';
const Page404: NextPage = () => {

    return (
		<MainContainer title='Error' emailForm={false}>
			<div className=' pt-16 min-h-screen flex flex-col justify-center items-center gap-4 text-opal'>
				<GiSadCrab className=' text-9xl' />
				<h2>404</h2>
				<h4>Page not found</h4>
				<Link href='/'>
					<button className='SecondaryBtn'>
						<h5>Go back to main page</h5>
					</button>
				</Link>
			</div>
		</MainContainer>
	);
}

export default Page404;