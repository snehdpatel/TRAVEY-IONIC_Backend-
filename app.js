var sql = require("mssql");
var express = require('express');
var app = express();
var connect = require('connect');
var port_listn = process.env.PORT || 8080;
//var port     = process.env.PORT || 8080;
var morgan = require('morgan'); 
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Configuration
app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                     
	 app.use(methodOverride());            
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/public'));
app.use(connect.cookieParser());
app.use(connect.logger('dev'));
app.use(morgan('dev'));
app.use(connect.bodyParser());
app.use(connect.urlencoded());
app.use(connect.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

require('./routes/routes.js')(app);

app.listen(port_listn);

console.log('The App runs on port ' + port_listn);



