const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (response) => {
	response.pipe(bl( (error, data) => {
		if (error) return console.log(error);
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});
