"use strict";
var Path = require("path");
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var express = require('express');
var consolidate_1 = require('consolidate');
var home = require('./api/Home/index');
var app = express();
var port = 1337;
app.engine('hbs', consolidate_1.handlebars);
app.use('/static', express.static(Path.join(__dirname, '../static')));
app.use(bodyParser.json());
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })
// let router = new Router(app, {
//     routesRoot: Path.join(__dirname, 'routes'),
//     viewsRoot: Path.join(__dirname, '../views'),
//     viewsExtension: 'hbs'
// })
console.log("web server running on port " + port);
app.set('views', Path.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.use('/', home);
app.disable('etag');
app.listen(port);
//# sourceMappingURL=server.js.map