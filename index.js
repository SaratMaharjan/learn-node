'use strict'

const fs = require('fs');
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const passport = require('passport');
const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const { Strategy: LocalStrategy } = require('passport-local');
// const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const config = JSON.parse(fs.readFileSync('./config.json'));

// const jwtOptions = {
// 	jwtFromRequest: ExtractJwt.fromAuthHeader(),
// 	secretOrKey: 'secret',
// 	algorithms: ['HS256']
// };

// passport.use(new JwtStrategy(jwtOptions, function(jwtPayload, done){
// 	done(null, { name: jwtPayload.name });
// }));

// passport.use(new LocalStrategy({
// 	usernameField: 'username',
// 	passwordField: 'password'
// }, function(username, password, done) {
// 	let authenticated = true;
// 	if (authenticated) {
// 		done(null, {
// 			username: username
// 		});
// 	} else {
// 		done(null, false);
// 	}
// }));

const widgetRouter = require('./routers/widgets');

const app = express();
const server = http.createServer(app);

// app.use(passport.authenticate('jwt', { session: false}));
app.use(cookieParser());

app.get('/demo', (req, res, next) => {

	console.log('demo req  sent to second handler');
	req.body = "demooo";

	next();

});

app.get('/demo', (req, res) => {

	console.log('demo req handled in 2nd handler');
	res.json({ msg: req.body});

});

app.use('/contacts', bodyParser.urlencoded({ extended: true }));
app.use('/contacts', bodyParser.json());
app.use('/contacts', (req, res) => {

	res.send('POST DATA: ' + JSON.stringify(req.body));

});

app.use('/demo/:id', function(req, res) {

	res.send('params: ' + JSON.stringify(req.params) + '<br>query: ' + JSON.stringify(req.query));

});

app.use('/api', bodyParser.json());
app.use('/api', widgetRouter);

app.use((req, res, next) => {

	console.log(req.cookies);
	res.cookie('demo', 'test');
	next();

});

app.use(express.static(config.webServer.folder, {
	index: 'index.html',
	setHeaders: function(res, path, stat) {
		res.set('X-Custom-Header', "My Express APP");
	}
}));

server.listen(config.webServer.port, () => console.log(`Running on port: ${config.webServer.port}`));
