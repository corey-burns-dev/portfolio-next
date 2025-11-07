const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const output = process.env.NEXT_OUTPUT_MODE === "export" ? "export" : "standalone";

const nextConfig = {
  reactStrictMode: true,
  output,
};

module.exports = withBundleAnalyzer(nextConfig);
