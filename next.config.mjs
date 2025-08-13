/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      // aggiungi altri domini quando serviranno:
      // { protocol: "https", hostname: "images.unsplash.com" },
      // { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    ...(isDev ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
