module.exports = function author(req, res, next) {
    req.serverResponse.author ={
        name: 'Ernesto',
        lastName: 'Rodriguez'
    };
    next();
};