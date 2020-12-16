// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    url: false,
  },
  // webpack: function (config) {
  //   config.module.rules.push({
  //     test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
  //     use: {
  //       loader: 'url-loader',
  //       options: {
  //         limit: 100000,
  //         name: '[name].[ext]'
  //       }
  //     }
  //   })
  //   return config
  // }
});

// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     url: false
//   }
// });

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
    },
  ],
]);
