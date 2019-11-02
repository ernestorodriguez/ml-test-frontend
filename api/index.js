const Router = require('express');
const router = Router();


router.get('/items', (req, res) => {
    res.send('Hello World form Api!')
});

router.get('/items/:id', (req, res) => {
    res.send('Hello World form Api!')
});

module.exports = router;