const Router = require('express');
const { renderToString } = require('react-dom/server');
const controller = require('./controller');

const router = Router();

/**
 * Send to client the spa As json for every route on path
 * @param req
 * @param res
 */
const renderSPA = (req, res) => {
    res.send(renderToString(controller({url: req.url})));
};

router.get('*', renderSPA);



module.exports = router;

