const path = require("path");
const myTheme = path.resolve(__dirname, "src/styles/var.less");
const orderData = require("./src/mock/order-data.json");
const musicData = require("./src/mock/tab-data.json");
const Seller = orderData.seller;
const Goods = orderData.goods;
const Ratings = orderData.ratings;

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
    before: function(app, server, compiler) {
      app.get('/order/seller', (req, res) => {
        res.json({ data: Seller });
      });
      app.get('/order/goods', (req, res) => {
        res.json({ data: Goods });
      });
      app.get('/order/ratings', (req, res) => {
        res.json({ data: Ratings });
      });
      app.get('/music', (req, res) => {
        res.json({ data: musicData });
      });
    },
    host: "0.0.0.0",
    port: 9056
  }
};
