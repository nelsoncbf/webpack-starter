const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'site')
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {

                test: /\.(jpg|jpeg|png|ico)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: './site',
        port: 8080
    }
}