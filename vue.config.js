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
    port: 9056
  }
};
