/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'postfiles.pstatic.net',
				port: '',
				pathname: '**',
			},
		],
	},
	//output: 'export', // 완전 스태틱 사이트로 추출된다.
};

export default nextConfig;
