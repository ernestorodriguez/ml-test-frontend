const mock = require('../../test/unit/aceptance/mock.json');

/**
 * Utils middleware
 * @module utils
 */

/** respond a valid json to request or trow and error
 * @param req {object} express request object
 * @param res {object} express response object
 * @param next {function} express callback function
 * @alias module:utils.respondAsJSON
 */
const respondAsJSON = (req, res, next) => {
    try {
        res.status(200).json(res.serverResponse);
    } catch (err) {
        next(new Error(`Error on respondAsJSON ${err}`));
    }
};

/**
 * config initial object to be used to composes response
 * @param req {object} express request object
 * @param res {object} express response object
 * @param next {function} express callback function
 * @alias module:utils.configResponse
 */
const configResponse = (req, res, next) => {
    res.serverResponse = {};
    next();
};

/**
 * call search service and store data on response
 * @param req {object} express request object
 * @param res {object} express response object
 * @param next {function} express callback function
 * @alias module:utils.searchItemsService
 */
const searchItemsService = (req, res, next) => {
    res.locals.searchApiResult = mock;
    next();
};

module.exports = {
    respondAsJSON,
    configResponse,
    searchItemsService,
};