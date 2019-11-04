const ItemDescription = require('../ItemSearch/ItemWithDescription');

module.exports = function itemSearch(req, res, next) {
    req.serverResponse.item = new ItemDescription({
        item: res.locals.itemsApiResult,
        description: res.locals.itemsDescriptionApiResult,
    });
    next();
};