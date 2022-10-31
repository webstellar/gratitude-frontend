const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "http://127.0.0.1:4000",
      changeOrigin: true,
    })
  );

  app.listen(3000);
};

//"proxy": ""proxy": "https://grati-tude.herokuapp.com/",
//"proxy": "http://127.0.0.1:4000",
