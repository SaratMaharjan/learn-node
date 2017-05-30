var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], (error, data) => {
	if (error) {
		console.log(error);
	} else {
		data.filter(item => path.extname(item) === '.' + process.argv[3]).map(item => console.log(item));
	}
});
