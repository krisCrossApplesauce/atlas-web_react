const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'header': './js/header.js',
        'body': './js/body.js',
        'footer': './js/footer.js',
    },
    output: {
        path: path.resolve(__dirname, 'modules'),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8564,
    },
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
                            gifsicle: {
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
