// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

// next.config.js

// module.exports = {
//   images: {
//     domains: ["example.com"],
//   },
// };

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    url: false,
  },
});

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       // these are the default values so you don't have to provide them if they are good enough for your use-case.
//       // but you can overwrite them here with any valid value you want.
//       inlineImageLimit: 8192,
//       imagesFolder: "images",
//       imagesName: "[name]-[hash].[ext]",
//       handleImages: ["jpeg", "png", "svg", "webp", "gif"],
//       optimizeImages: true,
//       optimizeImagesInDev: false,
//       mozjpeg: {
//         quality: 80,
//       },
//       webp: {
//         preset: "default",
//         quality: 75,
//       },
//       optipng: {
//         optimizationLevel: 3,
//       },
//     },
//   ],
// ]);

module.exports = {
  images: {
    domains: ["via.placeholder.com", "lh3.googleusercontent.com", "localhost"],
  },
};
