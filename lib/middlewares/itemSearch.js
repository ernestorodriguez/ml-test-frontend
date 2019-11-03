const Search = require('../ItemSearch');

module.exports = function itemSearch(req, res) {
    res.responseData = Object.assign(res.responseData, new Search(req.locals.searchApiResult).result());
    res.json(res.responseData)
};