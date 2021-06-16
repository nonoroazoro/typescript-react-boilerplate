/* eslint-disable no-console */
const chalk = require("chalk");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const { devProtocol, devHost, devPort, examplesPath } = require("../build.config");
const config = require("../webpack/webpack.config.dev");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: examplesPath,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    https: devProtocol === "https",
    noInfo: false,
    publicPath: config.output.publicPath,
    quiet: false,
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
        console.log(
            "\n",
            chalk.bold.redBright(`Failed to start the DevServer: ${String(stats.errors)}\n`)
        );
    }
    else
    {
        console.log(
            "\n",
            chalk.bold.greenBright("DevServer is running at"),
            chalk.bold.underline.cyan(`${devProtocol}://${devHost}:${devPort}\n`)
        );
    }
});

server.listen(devPort, devHost);
