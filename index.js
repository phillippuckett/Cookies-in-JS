/** Dependants */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

/** Express */
var app = express();

/** Application */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

/** End Points */

/** Connections */
var nodePort = 3001;
app.listen(nodePort, function () {
    console.log('Running nodemon://localhost:' + nodePort);
});

var mongoURI = 'mongodb://localhost:27017/cookieProject'
mongoose.connect(mongoURI);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});
