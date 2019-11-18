module.exports = {
  cache: {
    cacheId: "largeApp",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "largeApp",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
