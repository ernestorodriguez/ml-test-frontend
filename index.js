const express = require('express');
const config = require('config');
const App = express();

const port = config.get('app.port');
const api = require('./api');
const server = require('./app/server');

App.use('/api/', api);
App.use('/', server);
App.use(express.static('build'));
App.listen(port, () => console.log(`Server running on port: ${port}!`));