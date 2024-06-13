/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '10023',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
