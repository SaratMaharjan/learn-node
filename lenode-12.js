const http = require('http');
const mapStream = require('through2-map');

const server = http.createServer((req, res) => {
	if (req.method !== 'POST') {
		return res.end('send me a POST\n')
	}
	res.writeHead(200, { 'content-type': 'text/plain' });
	req.pipe(mapStream(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(process.argv[2]);
