const http = require('http');
const bl = require('bl');

let completed = 0;
let dataArray = [];

const printArray = items => items.map(item => console.log(item));

const httpGet = (url, currentIndex) => {
	http.get(url, (response) => {
		response.pipe(bl((error, data) => {

			if(error) return console.log(error);

			dataArray[currentIndex] = data.toString();

			completed++;
			if (completed === 3) printArray(dataArray);
		}));

	});
};

for (let i = 2; i <= 4; i++) {
	httpGet(process.argv[i], i);
}
