'use strict';

var express = require('express');
var gzippo = require('gzippo');
var app = express();

app.use(gzippo.staticGzip('dist'));
app.listen(process.env.PORT || 5000);
