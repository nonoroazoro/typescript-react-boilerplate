const chalk = require("chalk");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const { devProtocol, devHost, devPort, examplesPath } = require("../build.config");
const config = require("../webpack/webpack.config.dev");
const compiler = webpack(config);
const server = new WebpackDevServer({
    compress: true,
    historyApiFallback: true,
    host: devHost,
    hot: true,
    https: devProtocol === "https",
    port: devPort,
    static: {
        directory: examplesPath,
        staticOptions: {
            cacheControl: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        }
    }
}, compiler);

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

server.start();
