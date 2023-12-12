/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "links.papareact.com",
        pathname: "**",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
