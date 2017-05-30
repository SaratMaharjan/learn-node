const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	if (req.method !== 'GET') {
		return res.end('send me a GET\n')
	}
	const reqObject = url.parse(req.url, true);
	console.log(reqObject);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	req.pipe(res);
});

server.listen(process.argv[2]);
