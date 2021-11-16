/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io"],
    path: "",
    loader: "imgix"
  },
};
