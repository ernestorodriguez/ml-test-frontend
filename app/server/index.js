const Router = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.send('Hello World form server!')
});

router.get('/items', (req, res) => {
    res.send('Hello World form items search server!')
});

router.get('/items/:id', (req, res) => {
    res.send('Hello World form Item page server!')
});

module.exports = router;