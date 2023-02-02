/** @format */

import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import BagProvider from '../common/BagProvider';
import UserProvider from '../common/UserProvider';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<UserProvider>
				<BagProvider>
					<Component {...pageProps} />
				</BagProvider>
			</UserProvider>
		</>
	);
}
