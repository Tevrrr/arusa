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

