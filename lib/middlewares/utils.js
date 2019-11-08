const mock = require('../../test/unit/aceptance/mock.json');
const SearchDTO = require('../../lib/ItemSearch/SearchDTO');

const respondAsJSON = (req, res, next) => {
    try {
        res.status(200).json(req.serverResponse);
    } catch (err) {
        next(new Error(`Error on respondAsJSON ${err}`));
    }
};

const configResponse = (req, res, next) => {
    req.serverResponse = {};
    next();
};

const searchItemsService = (req, res, next) => {
    res.locals.searchApiResult = new SearchDTO(mock);
    next();
};

module.exports = {
    respondAsJSON,
    configResponse,
    searchItemsService,
};