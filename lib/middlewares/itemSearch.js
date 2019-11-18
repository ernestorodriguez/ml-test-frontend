const itemSearch = require('../ItemSearch');

/**
 * Generate response data for search query and add it to response
 * @module searchMiddleware
 * @param req {object} express request object
 * @param res {object} express response object
 * @param next {function} express callback function
 */
const searchMiddleware = function (req, res, next) {
    const searchResult = itemSearch(res.locals.searchApiResult);

    res.serverResponse = Object.assign(res.serverResponse, searchResult);
    next();
};

module.exports = searchMiddleware;
