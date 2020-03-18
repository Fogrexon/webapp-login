module.exports = {
    lintOnSave: process.env.NODE_ENV !== "production",
    devServer: {
      proxy: {
        "^/api": {
          target: "http://172.18.0.3:4000", // 自分のポートにする
          pathRewrite: {
            "^/api/": "/"
          }
        }
      },
      overlay: {
        warnings: true,
        errors: true
      }
    }
  };