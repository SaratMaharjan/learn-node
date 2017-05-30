const fs = require('fs');
const path = require('path');

module.exports = (filePath, extension, callback) => {
	fs.readdir(filePath, (error, data) => {
		if (error)callback(error);
		const filteredData = data.filter(item => path.extname(item) === '.' + extension);
		callback(null, filteredData);
	});
};
