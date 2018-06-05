const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", './src/index.jsx'],
    devServer: {
        contentBase: path.resolve(__dirname)
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader!surplus-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader!surplus-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [{loader: "style-loader" }, {loader: "css-loader"}]},
    ]
    },
    resolve: {
        alias: {
            upsideDownDrawing: path.resolve(__dirname, "src")
        },
        extensions: ['.js', '.jsx']
    },
    watchOptions: {
      poll: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html")
    })]
}
