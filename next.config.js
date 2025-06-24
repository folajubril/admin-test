// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['fakestoreapi.com', 'via.placeholder.com', 'picsum.photos', 'i.imgur.com','plus.unsplash.com', 'images.unsplash.com', 'cdn.pixabay.com', "util-assess.s3.ap-south-1.amazonaws.com"], // Add your external image domain here
  },
};

module.exports = nextConfig;
