'use strict';

const { resolve } = require('path');
const functions = require('firebase-functions');
const express = require('express');
const app = express();
const { ENV, PATHS } = require('./app-config');
const router = require('./server/routes');
const renderControl = require('./server/lib/renderControl');

// [Set] handlebars engine
const handlebars = require('./server/lib/handlebars-instance');
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

// [Set] Views
app.set('views', resolve(PATHS.VIEW_DIR, 'pages'));

if (ENV === 'development') {
  app.use(require('./server/middleware/webpackMiddleware'));
}

require('./server/lib/handlebars-instance').reload();

// [Use] Render control
app.use(renderControl);

// [Use] Router
app.use('/', router);

exports.app = functions.https.onRequest(app);
