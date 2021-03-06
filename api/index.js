const Router = require('express');
const author = require('../lib/middlewares/author');
const itemSearchResponse = require('../lib/middlewares/itemSearch');
const itemDescriptionResponse = require('../lib/middlewares/itemDescription');
const {
    respondAsJSON,
    configResponse,
    searchItemsService,
    itemService,
} = require('../lib/middlewares/utils');

const router = Router();

router.get('/items', configResponse, author, searchItemsService, itemSearchResponse, respondAsJSON);
router.get('/items/:id', configResponse, author, itemService, itemDescriptionResponse, respondAsJSON);

module.exports = router;
