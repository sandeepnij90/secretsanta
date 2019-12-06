const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const tsconfigsPlugin = require('tsconfig-paths-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const extractPlugin = new extractTextPlugin({
    filename: 'index.css'
})

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions:['.tsx', '.ts', '.js'],
        plugins:[
            new tsconfigsPlugin({
                configFile: './tsconfig.json'
            })
        ]
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            "/api/*": {
                target: 'http://localhost:5000'
            }
        }
    },
    module: {
        rules:[
            {
                test: /\.ts$/,
                use:[{
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.tsx$/,
                use:[{
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.html$/,
                use:[{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css/,
                use:['style-loader', 'css-loader']
            }
        ]
    }, 
    plugins:[
        extractPlugin,
        new htmlPlugin({
            template: 'src/index.html'
        })
    ]
}