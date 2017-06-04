var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'script/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader','resolve-url-loader', 'sass-loader?sourceMap'],
                })
            },
            {
				test:/\.js$/,
				exclude: /node_modules/,
				use:'babel-loader'
			}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: false
            },
            hash: true,
            filename:'./index.html',
            template: './src/template/index.html',
        }),
        new ExtractTextPlugin({
        	filename:'style/style.css',
            disable: false,
            allChunks: true
        })
    ]
}