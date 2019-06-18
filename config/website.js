const tailwind = require('../tailwind')
var {content, codeLang, pathPrefix} = require('../src/content')
module.exports = {
  pathPrefix: '/' + pathPrefix, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: content.website.siteTitle, // Navigation and Site Title
  siteTitleAlt: content.website.siteTitleAlt, // Alternative Site title for SEO
  siteTitleShort: content.website.siteTitleShort, // short_name for manifest
  siteHeadline: content.website.siteHeadline, // Headline for schema.org JSONLD
  siteUrl: 'https://' + (pathPrefix ? pathPrefix + '.' : '') + 'alexandredoria.com', // Domain of your site. No trailing slash!
  siteLanguage: content.website.siteLanguage, // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: content.website.siteDescription,
  author: 'Alexandre Dória', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@alexdoria01', // Twitter Username
  ogSiteName: 'alexdoria01', // Facebook Site Name
  ogLanguage: content.website.ogLanguage, // Facebook Language
  googleAnalyticsID: 'UA-140152818-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
