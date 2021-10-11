const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: "./src/app.js",
    detail : './src/detailPage.js',
    categoryDetail : './src/categoryDetail.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks:['app']
    }),

    new HtmlWebpackPlugin({
        template : './src/detail.html',
        filename: 'detail.html',
        chunks:['detail']
    }),

    new HtmlWebpackPlugin({
        template : './src/categoryDetail.html',
        filename : 'categoryDetail.html',
        chunks :['categoryDetail']
    })
  ],
};