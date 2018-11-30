const ImageminPlugin = require('imagemin-webpack');
const responsiveSharp = require('responsive-loader/sharp');
const ImageminWebp = require('imagemin-webp');

const config = {
    entry: './src/index.js',
    output: {
        
        filename: '[name].js',
        pathinfo: false
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: "css-loader", // creates style nodes from JS strings
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|svg|bmp|gif|webp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'responsive-image/[name].[hash].[ext]',
                            fallback: 'responsive-loader',
                            adapter: responsiveSharp
                        }
                    },
                    // {
                    //     loader: ImageminPlugin.imageminLoader,
                    //     options: {
                    //       bail: false, // Ignore errors on corrupted images
                    //       cache: true,
                    //       imageminOptions: {
                    //         plugins: [
                    //             ImageminWebp({
                    //                 loseless: true
                    //             })
                    //         ]
                    //       }
                    //     }
                    // }
                ]
            }
        ]
    },
    plugins: [
        
    ],
}

const imagemin2 = new ImageminPlugin.ImageminWebpackPlugin({
    // name: '/[path]/imagemin/[name].[hash].webp',
    loader: false,
    imageminOptions: {
        plugins: [
            ImageminWebp({
                loseless: true
            })
        ]
    }
});

// config.plugins.push(imagemin);
// config.plugins.push(imagemin2);
module.exports =  config;