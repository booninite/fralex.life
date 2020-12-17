const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    domains: [
      {
        domain: "fralex.life",
        defaultLocale: "en-US",
      },
    ],
  },
};

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    url: false,
  },
});

module.exports = withPlugins([
  [
    optimizedImages,
    {
      // these are the default values so you don't have to provide them if they are good enough for your use-case.
      // but you can overwrite them here with any valid value you want.
      inlineImageLimit: 8192,
      imagesFolder: "images",
      imagesName: "[name]-[hash].[ext]",
      handleImages: ["jpeg", "png", "svg", "webp", "gif"],
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      webp: {
        preset: "default",
        quality: 75,
      },
      optipng: {
        optimizationLevel: 3,
      },
    },
  ],
]);
