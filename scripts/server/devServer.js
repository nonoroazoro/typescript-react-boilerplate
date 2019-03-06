const path = require("path");
const webpack = require("webpack");
const { green, red } = require("chalk");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack/webpack.config.dev");

const port = process.env.PORT || 8080;
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, "../../examples"),
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    quiet: true,
    compress: true,
    stats: {
        children: false,
        colors: true,
        modules: false
    },
    staticOptions: {
        cacheControl: true,
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
});

compiler.hooks.done.tap("done", (stats) =>
{
    const { errors } = stats.toJson();
    if (errors && errors.length > 0)
    {
        console.info(red(`\nUnable to start the dev server: ${stats.errors}\n`));
    }
    else
    {
        console.info(green(`\nDev server is started on ${port}, ready for debugging...\n`));
    }
});

server.listen(port, "0.0.0.0");
