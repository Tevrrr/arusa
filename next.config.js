/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	exportPathMap: function () {
		return {
			'/': { page: '/' },
		};
	},
	images: {
		loader: 'custom',
		loaderFile: './common/loader.ts',
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
			},
		],
	},
};

module.exports = nextConfig

