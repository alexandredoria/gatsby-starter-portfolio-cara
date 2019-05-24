const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/es', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Alexandre Dória - Portafolio', // Navigation and Site Title
  siteTitleAlt: 'Alexandre Dória', // Alternative Site title for SEO
  siteTitleShort: 'Alexandre Dória', // short_name for manifest
  siteHeadline: 'Mezclando la belleza del arte con la eficiencia de la tecnología.', // Headline for schema.org JSONLD
  siteUrl: 'https://alexandredoria.com', // Domain of your site. No trailing slash!
  siteLanguage: 'es', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Ideas implementadas por Alex Dória.',
  author: 'Alexandre Dória', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@alexdoria01', // Twitter Username
  ogSiteName: 'alexdoria01', // Facebook Site Name
  ogLanguage: 'es_ES', // Facebook Language
  googleAnalyticsID: 'UA-140152818-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
