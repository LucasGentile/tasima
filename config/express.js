var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var path = require("path");


module.exports = function() {

    var app = express();
	
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({ extended: true }));

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};