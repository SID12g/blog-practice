const debug = process.env.NODE_ENV !== "production";
const repository = "sid12g-blog";

const nextConfig = {
    reactStrictMode: true,
    assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://sid12g.github.io/sid12g-blog"
      : "", 
    trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
    output: 'export'
};

module.exports = nextConfig;