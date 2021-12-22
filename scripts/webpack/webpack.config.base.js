const WebpackBar = require("webpackbar");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const buildConfig = require("../env.config");

/** @type { import("webpack").Configuration } */
module.exports = {
    context: buildConfig.rootPath,
    entry: {
        index: ["./src"]
    },
    output: {
        path: buildConfig.buildPath,
        publicPath: "/",
        filename: "[name].js",
        chunkFilename: "[name].chunk.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: { transpileOnly: true }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "images/[name].[ext]"
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
                            name: "fonts/[name].[ext]"
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
                                name: "fonts/[name].[ext]"
                            }
                        }
                    ]
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: "src/**/*.{js,jsx,ts,tsx}"
            }
        }),
        new WebpackBar()
    ],
    stats: {
        children: false,
        colors: true,
        modules: false
    }
};
