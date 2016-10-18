import webpack from 'webpack';
import path from 'path';

/**
 * Webpack is really good for writing a few lines of code to create a really powerful (development) environment.
 */

// Configure webpack
export default {
    debug: true,                                 // enable debug information
    devtool: 'inline-source-map',                // TODO: in course is het cheap-module-eval-source-map
    noInfo: false,                               // means webpack will show a list of files it is bundling
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',      // bundle it up for a webbrowser, could also be for node for example
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    // Tell the dev server where the code is
    devServer: {
        contentBase: path.resolve(__dirname, 'src')         // it is in src directory
    },
    // Plugins that enhance webpacks power
    plugins: [
        new webpack.HotModuleReplacementPlugin(),    // enable us to replace modules without having to do a full browser refresh
        new webpack.NoErrorsPlugin()                 // keep errors to break the hot loading experience, instead it gives a really nice error message in the browser
    ],
    // Module tell webpack what file types it should handle
    // These items here below are a good setup for Boostrap, see webpack doc
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},      // accept js, and babel to transpile te code
            {test: /(\.css)$/, loaders: ['style', 'css']},                                  // handle also css (coudl also be less or sass
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},                           // also images and fonts
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};