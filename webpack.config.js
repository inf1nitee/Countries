const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    // mode
    mode: 'production', // development
    // entry
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
        about: path.resolve(__dirname, './src/js/about.js')
    },
    // output
    output : {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true
    },
    // devServer
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 3000,
        open:true,
        hot: true,
        compress: true,
        historyApiFallback:true
    },
    // loader
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            
        ]
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            //title
            title: 'Home',
            //filename
            filename: 'index.html',
            //template
            template: './src/indexTemp.html',
            //chunks
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            //title
            title: 'About',
            //filename
            filename: 'about.html',
            //template
            template: './src/pages/aboutTemp.html',
            chunks: ['about'],
        }),new MiniCssExtractPlugin()
    ],
}