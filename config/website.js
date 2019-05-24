const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/en', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Alexandre Dória - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Alexandre Dória', // Alternative Site title for SEO
  siteTitleShort: 'Alexandre Dória', // short_name for manifest
  siteHeadline: 'Mixing the beauty of art with the efficiency of technology.', // Headline for schema.org JSONLD
  siteUrl: 'https://en.alexandredoria.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Ideas implemented by Alex Dória',
  author: 'Alexandre Dória', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@alexdoria01', // Twitter Username
  ogSiteName: 'alexdoria01', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-140152818-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
