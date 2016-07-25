module.exports = {
    entry: './main.js',

    output: {
        path: './dist/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 5000,
        historyApiFallback: true,
        proxy: {
            '/api*' : {
                target: 'http://localhost:8000'
            }
        }
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}