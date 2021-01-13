const path = require("path");
const myTheme = path.resolve(__dirname, "src/styles/var.less");
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "${myTheme}";`
          }
        }
      }
    }
  },
  devServer: {
    host: "0.0.0.0",
    port: 9056
  }
};
