/** @type {import('next').NextConfig} */
module.exports = {
  target: "serverless",
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io"],
    path: "",
    loader: "imgix"
  },
};
