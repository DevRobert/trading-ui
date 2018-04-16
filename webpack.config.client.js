const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        './src/boot/index'
    ],
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx'
        ]
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: 'babel-loader',
                include: [
                    path.join(__dirname, 'src')
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: 3001,
        historyApiFallback: true,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    output: {
        path: path.join(__dirname, '.build'),
        publicPath: 'http://localhost:3001/',
        filename: 'client.bundle.js'
    }
}
