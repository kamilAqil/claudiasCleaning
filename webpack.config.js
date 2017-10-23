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
        },{
            test: /\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
            }, 
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name]'
                },
            },
        ],
    },
    devtool: 'eval-source-map'
};