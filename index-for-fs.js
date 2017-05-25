'use strict'

const http = require('http');
const express = require('express');
const fs = require('fs');

// Read file synchronously
// const configJson = fs.readFileSync('./config.json');

// Read file asynchronously
fs.readFile('./config.json', 'utf8', (err, data) => {

	const config = JSON.parse(data);

	const app = express();

	app.use(express.static(config.webServer.folder));

	const httpServer = http.createServer(app);

	httpServer.listen(config.webServer.port, function(err){
		if(err){
			console.log(err.message);
			return;
		}
		console.log(`listening on port ${config.webServer.port}`);
	})

})
