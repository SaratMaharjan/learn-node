const _ = require("lodash");

const worker = function (items, filter = {active: true}) {
	return _.filter(items, filter);
};

module.exports = worker;
