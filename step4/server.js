'use strict'

var express = require('express');
var app = express();

app.use('/dev', express.static(__dirname + '/public'));

app.use('/prod', express.static(__dirname + '/build'));

app.listen(3000);