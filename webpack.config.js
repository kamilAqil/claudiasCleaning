const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
    entry: './client/src/app.js',
    output: {
        path: path.resolve(__dirname, './', 'client/public'),
        filename: 'derp.js'
    },
    plugins: [
        new Dotenv({
            path: '.env',
            safe: false
        })
    ],
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }
        , {
            test: /\.s?css$/
        }],
    },
    devtool: 'eval-source-map'
};