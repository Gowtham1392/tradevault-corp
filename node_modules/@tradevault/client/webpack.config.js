/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Webpack 5 config for a React 18 (CSR) app using Babel for TS/TSX transpilation.
 * - No TypeScript type-checking happens here (that belongs to `tsc --noEmit` in CI).
 * - Asset Modules handle images without extra loaders.
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    const isProd = argv.mode === "production";

    return {
        target: "web",
        mode: isProd ? "production" : "development",

        entry: path.resolve(__dirname, "src", "index.tsx"),

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isProd ? "[name].[contenthash].js" : "[name].js",
            assetModuleFilename: "assets/[hash][ext][query]",
            publicPath: "/",
            clean: true
        },

        devtool: isProd ? "source-map" : "eval-cheap-module-source-map",

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },

        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                    type: "asset/resource"
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src", "index.html"),
                inject: "body"
            })
        ],

        devServer: {
            port: 3000,
            historyApiFallback: true, // critical for React Router deep links
            hot: true,
            open: true,
            compress: true,
            client: {
                overlay: {
                    errors: true,
                    warnings: false
                }
            }
        }
    };
};
