const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = require("./webpack.config.base");

config.mode = "production";

config.output.filename = "[name].[chunkhash:8].js";
config.output.chunkFilename = "[name].[chunkhash:8].chunk.js";

config.module.rules.push(
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: ["css-loader"],
            fallback: "style-loader"
        })
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            use: ["css-loader", "less-loader"],
            fallback: "style-loader"
        }),
        include: /node_modules/
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract(
            {
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]-[local]__[hash:base64:8]"
                        }
                    },
                    "less-loader"
                ],
                fallback: "style-loader"
            }
        ),
        exclude: /node_modules/
    }
);

config.plugins.push(
    new ExtractTextPlugin({
        filename: "res/[name].[chunkhash:8].css",
        allChunks: true,
        ignoreOrder: true
    })
);

module.exports = config;
