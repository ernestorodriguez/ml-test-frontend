const Router = require('express');
const spa = require('../pages/spa');

const router = Router();


router.get('/', spa);
router.get('/items', spa);
router.get('/items/:id', spa);

module.exports = router;
