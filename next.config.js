const output = process.env.NEXT_OUTPUT_MODE === "export" ? "export" : "standalone";

module.exports = {
  reactStrictMode: true,
  output,
};
