const express = require('express');
const config = require('config');
const App = express();

const port = config.get('app.port');
const api = require('./api');
const server = require('./app/server');

App.use('/api/', api);
App.use('/', server);
App.use(express.static('build'));



/* istanbul ignore if */
if (!module.parent) {
    App.listen(port, () => console.log(`Server running on port: ${port}!`));
}

module.exports = App;