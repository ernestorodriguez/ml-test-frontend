const Item = require('../entities/Item');
const Categories = require('./Categories');

/**
 * Generate search result to be send to the frontend.
 * @module searchResult
 * @param serverData
 * @return {{categories: *, items: Array}}
 */

function searchResult (serverData) {
    const data = filterData(serverData);
    const items = generateCollection(data.results);
    const categories = new Categories(data.categories, data.results);
    return {
        categories: categories.getList(),
        items,
    };
}

/**
 *
 * @param data
 * @return {{results: array, categories: array}}
 */
function filterData (data) {
    const results = data.results;
    const categoryFilter = data.filters.find((filter) => filter.id === 'category');
    const categories = categoryFilter.values;

    return {
        results,
        categories
    }
}

/**
 * Generate the collection of items
 * @param searchResults {Array} array of items data
 * @return {Array} of new Items
 */
const generateCollection = function(searchResults) {
    return searchResults.map((itemData) => new Item(itemData));
};


module.exports = searchResult;