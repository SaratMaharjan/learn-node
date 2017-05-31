const _ = require("lodash");


const worker = function (items) {
	return _.sortBy(items, [obj => -1 * obj['quantity']]);
};

module.exports = worker;
