const Item = require('./Item');
const Categories = require('./Categories');

/**
 * @class
 * @classdesc This is a description of the MyClass class.
 */
class SearchResult {
    /**
     *
     * @param searchDTO { SearchDTO } contains server response from search api
     */
    constructor(searchDTO) {
        this.items = this.generateCollection(searchDTO.results);
        this.categories = new Categories(searchDTO.categories, searchDTO.results);
    }

    /**
     * Generate the collection of items
     * @param searchResults {Array} array of items data
     * @return {Array} of new Items
     */
    generateCollection(searchResults) {
        return searchResults.map((itemData) => new Item(itemData));
    }

    /**
     * generate object with data results
     * @return {{categories: (Categories), items: (Array|*)}}
     */
    result() {
        return {
            categories: this.categories.getList(),
            items: this.items,
        };
    }
}


module.exports = SearchResult;