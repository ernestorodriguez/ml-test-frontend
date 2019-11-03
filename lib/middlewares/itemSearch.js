const Search = require('../ItemSearch');

module.exports = function itemSearch(req, res, next) {
    req.serverResponse = Object.assign(req.serverResponse, new Search(res.locals.searchApiResult).result());
    next();
};