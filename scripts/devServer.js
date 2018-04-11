const path = require("path");
const webpack = require("webpack");
const { green, red } = require("chalk");
const WebpackDevServer = require("webpack-dev-server");

const port = process.env.PORT || 8080;
const config = require("./webpack/webpack.config.dev");
const server = new WebpackDevServer(webpack(config), {
    contentBase: path.resolve(__dirname, "../examples"),
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    quiet: false,
    stats: {
        children: false,
        colors: true,
        modules: false
    }
});

server.listen(port, "0.0.0.0", (err) =>
{
    console.log(
        err ? red(`Unable to start the dev server: ${err.message}`)
            : green(`Dev server is started on ${port}`)
    );
});
