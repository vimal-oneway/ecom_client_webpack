const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,"/dist"),
        filename:"bundle.js"
    },

    target:"web",

    resolve:{
        extensions:[".jsx",".js"]
    },

    plugins:[
        new HTMLWebpackPlugin({template:'./public/index.html'})
    ],

    module:{
        rules:[
            {
                test: /.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            { test: /\.css$/, use: {loader:'css-loader', options:{modules:true}} },
            {
                test: /\.(gif|png|jpg)$/,
                use: {
                  loader: 'file-loader',
                }
            }
        ]
    }
}