const path = require("path"); //nodejs里面的基本包，用来处理路径

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//__dirname表示文件相对于工程的路径
module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 生成html模板，显示在页面（必须，缺少则显示的是对应的目录）
      template: "src/index.html",
    }),

    new VueLoaderPlugin(),
  ],
  mode: "development",
  module: {
    rules: [
      {
        //通过vue-loader来识别以vue结尾的文件
        test: /.vue$/,
        loader: "vue-loader",
      },
      {
        //通过vue-loader来识别以vue结尾的文件
        test: /.css$/,
        //css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
        use: [
          "style-loader", //接受潜在页面内部的style标签的文件。
          "css-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
      },
    ],
  },
};
