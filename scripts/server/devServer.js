const path = require("path");
const chalk = require("chalk");
const symbols = require("log-symbols");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const host = "0.0.0.0";
const port = process.env.PORT || 8080;
const config = require("../webpack/webpack.config.dev");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, "../../examples"),
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    https: false,
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
            symbols.error,
            chalk.bold.redBright(`Failed to start the DevServer: ${stats.errors}\n`)
        );
    }
    else
    {
        console.log(
            "\n",
            symbols.success,
            chalk.bold.greenBright("DevServer is ready on"),
            chalk.bold.underline.cyan(`${host}:${port}\n`)
        );
    }
});

server.listen(port, host);
