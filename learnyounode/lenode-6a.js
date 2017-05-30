
const lenode6 = require('./lenode-6');

lenode6(process.argv[2], process.argv[3], (error, data) => {
	if (error) return console.log(error);
	data.map(item => console.log(item));
});
