/**
 * middleware to add Author data to response
 * @module author
 * @param req {object} express request object
 * @param res {object} express response object
 * @param next {function} express callback function
 */
module.exports = function author(req, res, next) {
    res.serverResponse.author ={
        name: 'Ernesto',
        lastName: 'Rodriguez'
    };
    next();
};