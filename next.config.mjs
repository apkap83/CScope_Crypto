/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "assets.coingecko.com" }],
  },
};

export default nextConfig;
