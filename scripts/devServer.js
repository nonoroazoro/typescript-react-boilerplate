const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = require("./webpack/webpack.config.dev");
const server = new WebpackDevServer(webpack(config), {
    contentBase: path.resolve(__dirname, "../examples"),
    disableHostCheck: true,
    historyApiFallback: true,
    // hot: true,
    https: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    quiet: false,
    stats: { colors: true }
});

module.exports = server;
