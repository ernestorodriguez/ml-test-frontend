module.exports = function author(req, res, next) {
    res.responseData = Object.assign(res.responseData, {
        author: {
            name: 'Ernesto',
            lastName: 'Rodriguez'
        }
    });
    next();
};