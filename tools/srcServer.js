// This file configure the web server - that serves up the files in the source directory

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev'; // import custom created webpack.config.dev
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);   // use above declared config import, we call here webpack with the config we defined.

// Start configuring Express
// See: https://webpack.github.io/docs/webpack-dev-middleware.html what middleware is
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,  // no info on command line
    publicPath: config.output.publicPath  // use publicpath that is declared in config
}));

app.use(require('webpack-hot-middleware')(compiler));   // use webpack-hot-middleware and use compiler config info that we declared above

// Tells Express which files we want to servce.
app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../src/index.html'));   // only serve index.html, because we create a single page app for all the request
    // The wildcard (*) means for all request return src/index.html
});

// Start Express on the port (3000) and open the browser which that port below
app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});