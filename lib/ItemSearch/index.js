const Item = require('../entities/Item');

/**
 * Generate search result to be send to the frontend.
 * @module searchResult
 * @param serverData
 * @return {{categories: *, items: Array}}
 */

function searchResult(serverData) {
    const data = filterData(serverData);
    const items = generateCollection(data.results);
    const categories = findCategories(data);
    return {
        categories,
        items,
    };
}

/**
 * find categories path for most find item
 * @param data {object}
 * @return {Array|*}
 */
function findCategories({results, categories}) {
    const categoryData = categories.find((category) => getMostFrequentCategory(results) === category.id);
    return categoryData.path_from_root.map((value) => value.name);
}

/**
 * find in items finding the most uses category
 * @param itemsData {object}
 * @return {string}
 */
function getMostFrequentCategory(itemsData) {
    let mostFrequentCategory = 'nullCategory';
    const counts = {
        [mostFrequentCategory]: 0,
    };

    for (let i = 0; i < itemsData.length; i++) {
        let num = itemsData[i].category_id;
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    Object.keys(counts).map((key) => {
        const current = key;
        if( counts[current] > counts[mostFrequentCategory] ) {
            mostFrequentCategory = current;
        }
    });

    return mostFrequentCategory;
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