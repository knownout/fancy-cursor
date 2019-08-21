const AutoPrefixer = require('autoprefixer');
module.exports = {
    mode: 'production',
    output: {
        filename: 'fancy-cursor.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /tests/],
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                AutoPrefixer({
                                    overrideBrowserslist: ['ie >= 8', 'last 6 version']
                                })
                            ]
                        }
                    }, 
                    "sass-loader"
                ]
            }
        ]
    }
}