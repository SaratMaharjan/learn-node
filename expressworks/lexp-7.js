
var express = require('express');

var app = express();

app.use('/search', function(req, res) {
	// console.log(req);
	res.send(req.query);
});

app.listen(process.argv[2]);
