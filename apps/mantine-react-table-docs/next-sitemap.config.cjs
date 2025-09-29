/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.mantine-react-table-open.com',
  generateRobotsTxt: true,
  changefreq: null,
  priority: null,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/data', '/proxy'],
      },
    ],
  },
};

module.exports = config;
