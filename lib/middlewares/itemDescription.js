const ItemDescription = require('../entities/ItemWithDescription');

/**
 * Generate response data for Item description query and add it to response
 * @module itemSearch
 * @param req {object} express request object
 * @param res {object} express response object
 * @param next {function} express callback function
 */
module.exports = function itemSearch(req, res, next) {
    res.serverResponse.item = new ItemDescription({
        item: res.locals.itemsApiResult,
        description: res.locals.itemsDescriptionApiResult,
    });
    next();
};