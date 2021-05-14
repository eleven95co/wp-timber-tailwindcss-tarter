const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin()],

    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader"],
            },
        ],
    },
    externals: {
        jquery: 'jQuery'
    }
};