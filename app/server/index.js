const Router = require('express');
const spa = require('../pages/spa');
const itemDescriptionResponse = require('../../lib/middlewares/itemDescription');
const itemSearchResponse = require('../../lib/middlewares/itemSearch');
const {
    configResponse,
    searchItemsService,
    itemService,
} = require('../../lib/middlewares/utils');
const router = Router();


router.get('/', spa);
router.get('/items', configResponse, searchItemsService, itemSearchResponse, spa);
router.get('/items/:id', configResponse, itemService, itemDescriptionResponse, spa);

module.exports = router;
