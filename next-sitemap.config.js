/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://optosoftware.app",
  generateRobotsTxt: true, // (optional)
  outDir: "out",
  // ...other options
};
