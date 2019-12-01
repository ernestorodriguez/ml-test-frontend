const SearchService = require('../../services/searchML');
const ItemService = require('../../services/itemsML');

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
    res.status(200).json(res.serverResponse);
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
const searchItemsService = async (req, res, next) => {
    res.locals.searchApiResult = await SearchService.get(req.query.q);
    next();
};

/**
 * call Items service and store data on response
 * @param req {object} express request object
 * @param res {object} express response object
 * @param next {function} express callback function
 * @alias module:utils.searchItemsService
 */
const itemService = async (req, res, next) => {
    const itemServiceResponse = await ItemService.get(req.params.id);

    Object.assign(res.locals, itemServiceResponse);
    next();
};

module.exports = {
    respondAsJSON,
    configResponse,
    searchItemsService,
    itemService,
};