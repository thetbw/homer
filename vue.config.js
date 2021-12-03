const manifestOptions = require("./public/assets/manifest.json");

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
  publicPath: "",
  pwa: {
    manifestPath: "assets/manifest.json",
    manifestCrossorigin: "use-credentials",
    appleMobileWebAppStatusBarStyle: "black",
    appleMobileWebAppCapable: "yes",
    name: manifestOptions.name,
    themeColor: manifestOptions.theme_color,
    manifestOptions,
    iconPaths: {
      favicon32: "assets/logo.jpg",
      favicon16: "assets/logo.jpg",
      appleTouchIcon: "assets/logo.jpg",
      maskIcon: "assets/logo.jpg",
      msTileImage: "assets/logo.jpg",
    },
  },
};
