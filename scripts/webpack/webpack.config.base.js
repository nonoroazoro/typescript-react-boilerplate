const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname, "../../");
const BUILD_PATH = path.join(ROOT_PATH, "./dist");

module.exports = {
    context: ROOT_PATH,
    entry: {
        vendor: ["./src/common/vendor"],
        index: ["./src/index"]
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
                    enforce: true,
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
                    "cache-loader",
                    {
                        loader: "thread-loader",
                        options: { workers: require("os").cpus().length - 1 }
                    },
                    {
                        loader: "ts-loader",
                        options: { happyPackMode: true, transpileOnly: true }
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
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true, tslint: true })
    ],
    stats: {
        children: false,
        modules: false
    }
};
