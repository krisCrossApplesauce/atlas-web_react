const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        hot: true,
        compress: true,
        port: 8564,
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gisicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
};
