const path = require("path");

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require("awesome-typescript-loader");

const ROOT_PATH = path.resolve(__dirname, "../../");
const SRC_PATH = path.resolve(ROOT_PATH, "./src");
const BUILD_PATH = path.join(ROOT_PATH, "./dist");

module.exports = {
    context: SRC_PATH,
    entry: {
        vendor: ["./common/vendor"],
        index: ["./index"]
    },
    devtool: "source-map",
    output: {
        path: BUILD_PATH,
        publicPath: "/assets/",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: { useCache: true }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "res/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            mimetype: "application/font-woff",
                            name: "res/fonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:
                    [
                        {
                            loader: "file-loader",
                            options: {
                                limit: 8192,
                                mimetype: "application/font-woff",
                                name: "res/fonts/[name].[ext]"
                            }
                        }
                    ]
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ],
    stats: {
        children: false,
        modules: false
    }
};
