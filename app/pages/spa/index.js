const Router = require('express');
const { renderToString } = require('react-dom/server');
const controller = require('./controller');

const router = Router();

const renderSPA = (req, res) => {
    res.send(renderToString(controller()));
};

router.get('*', renderSPA);



module.exports = router;

