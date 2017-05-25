
const express = require('express');
const widgetRouter = express.Router();

widgetRouter.route('/widgets')
	.get((req, res ) => {

		res.json([
			{ name: 'widget 1', color: 'blue', size: 'large', quantity: 1},
			{ name: 'widget 2', color: 'blue', size: 'large', quantity: 1},
			{ name: 'widget 3', color: 'blue', size: 'large', quantity: 1},
			{ name: 'widget 4', color: 'blue', size: 'small', quantity: 10}
		]);

})
	.post();

widgetRouter.route('/widgets/:widgetId')
	.get()
	.put()
	.delete();

module.exports = widgetRouter;
